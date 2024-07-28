import { inject, injectable } from 'inversify';

import ProductRepository from '../repository/ProductRepository';
import ProductModel, { IProduct } from '../model/ProductModel';
import ProductDTO from '../dto/ProductDTO';
import { ObjectId } from 'mongoose';

@injectable()
export class ProductService {
    @inject(ProductRepository) private productRepository!: ProductRepository;

    async createProduct(payload: ProductDTO.CreateProductRequest) {

    }
    async createProductCommon(payload: ProductDTO.CreateProductRequest, productId: ObjectId) {
        const newProduct = new ProductModel(payload);
        newProduct._id = productId;
        await this.productRepository.save(newProduct);
    }
}

