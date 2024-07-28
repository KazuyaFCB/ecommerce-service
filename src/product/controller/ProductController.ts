import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';

import ProductDTO from '../dto/ProductDTO';
import ResponseHandler from '../../handler/ResponseHandler';
import { ProductFactory } from '../service/ProductFactory';

@injectable()
class ProductController {
    @inject(ProductFactory) private productFactory!: ProductFactory;

    async create(req: Request, res: Response, next: NextFunction) {
        const createProductRequest: ProductDTO.CreateProductRequest = req.body;
        const createdProduct = await this.productFactory.createProduct(createProductRequest);
        return ResponseHandler.sendCreatedResponse(res, createdProduct);
    }
}

export default ProductController;
