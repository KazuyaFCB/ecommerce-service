import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';

import ProductDTO from '../dto/ProductDTO';
import ResponseHandler from '../../handler/ResponseHandler';

@injectable()
class ProductController {
    //@inject(AuthService) private authService!: AuthService;

    async create(req: Request, res: Response, next: NextFunction) {
        const createProductRequest: ProductDTO.CreateProductRequest = req.body;
        //const result = await this.authService.register(registerRequest);
        return ResponseHandler.sendCreatedResponse(res, null);
    }
}

export default ProductController;
