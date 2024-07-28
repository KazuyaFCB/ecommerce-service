import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import { ProductService } from './ProductService';
import ClothingService from './ClothingService';
import ElectronicsService from './ElectronicsService';
import ProductDTO from '../dto/ProductDTO';
import { ApiException } from '../../exception/ApiException';
import container from '../../config/ioc/InversifyConfig';

@injectable()
export class ProductFactory {
    private productTypes: { [key: string]: ProductService } = {};

    constructor() {
        this.registerProductType("Clothing", container.resolve(ClothingService));
        this.registerProductType("Electronics", container.resolve(ElectronicsService));
    }
    
    registerProductType(type: string, classRef: ProductService) {
        this.productTypes[type] = classRef;
    }
    async createProduct(payload: ProductDTO.CreateProductRequest) {
        const productClass = this.productTypes[payload.productType];
        if (!productClass) {
            throw new ApiException(`Invalid product type`, "", `ProductType: ${payload.productType}`, StatusCodes.NOT_FOUND);
        }
        await productClass.createProduct(payload);
    }
}