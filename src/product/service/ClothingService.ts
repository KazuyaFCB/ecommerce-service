import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import { ProductService } from './ProductService';
import ClothingRepository from '../repository/ClothingRepository';
import ProductDTO from '../dto/ProductDTO';
import ClothingModel from '../model/ClothingModel';
import { ApiException } from '../../exception/ApiException';

@injectable()
class ClothingService extends ProductService {
    @inject(ClothingRepository) private clothingRepository!: ClothingRepository;
    async createProduct(payload: ProductDTO.CreateProductRequest) {
        const newClothing = new ClothingModel(payload.productAttributes);
        const createdClothing = await this.clothingRepository.save(newClothing);
        if (!createdClothing) {
            throw new ApiException("Failed to create clothing", "", "", StatusCodes.BAD_REQUEST);
        }
        await super.createProductCommon(payload, createdClothing.id);
    }
}

export default ClothingService;