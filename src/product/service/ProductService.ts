import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import ProductRepository from '../repository/ProductRepository';
import { ApiException } from '../../exception/ApiException';
import ProductModel, { IProduct } from '../model/ProductModel';
import ProductDTO from '../dto/ProductDTO';
import ClothingRepository from '../repository/ClothingRepository';
import { ObjectId } from 'mongoose';
import ClothingModel from '../model/ClothingModel';

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

    async createProduct(payload: ProductDTO.CreateProductRequest, productId: ObjectId) {
        const newProduct = new ProductModel(payload);
        newProduct._id = productId;
        await this.productRepository.save(newProduct);
    }
}

@injectable()
class ClothingService extends ProductService {
    @inject(ClothingRepository) private clothingRepository!: ClothingRepository;
    async createProduct(payload: ProductDTO.CreateProductRequest) {
        const newClothing = new ClothingModel(payload.productAttributes);
        const createdClothing = await this.clothingRepository.save(newClothing);
        if (!createdClothing) {
            throw new ApiException("Failed to create clothing", "", "", StatusCodes.BAD_REQUEST);
        }
        await super.createProduct(payload, createdClothing.id);
    }
}
