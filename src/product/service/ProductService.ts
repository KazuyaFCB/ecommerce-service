import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import ProductRepository from '../repository/ProductRepository';
import { ApiException } from '../../exception/ApiException';
import { IProduct } from '../model/ProductModel';
import ProductDTO from '../dto/ProductDTO';
import ClothingRepository from '../repository/ClothingRepository';

@injectable()
class ProductFactory {
    private productTypes: { [key: string]: ProductService } = {};
    
    registerProductType(type: string, classRef: ProductService) {
        this.productTypes[type] = classRef;
    }
    async createProduct(type: string, payload: ProductDTO.CreateProductRequest) {
        const productClass = this.productTypes[type];
        if (!productClass) {
            throw new ApiException(`Invalid product type`, "", `ProductType: ${type}`, StatusCodes.NOT_FOUND);
        }

    }
}

@injectable()
class ProductService {
    @inject(ProductRepository) private productRepository!: ProductRepository;

    async createProduct(product: IProduct) {
        
        await this.productRepository.save(product);
    }
}

@injectable()
class ClothingService extends ProductService {
    @inject(ClothingRepository) private clothingRepository!: ClothingRepository;
    async createProduct(payload: ProductDTO.CreateProductRequest) {
        const createdClothing = await this.clothingRepository.save(payload.product_attributes);
        if (!createdClothing) {
            throw new ApiException("Failed to create clothing", "", "", StatusCodes.BAD_REQUEST);
        }
        await super.createProduct(...payload, id: createdClothing.id);
    }
}
