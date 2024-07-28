import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import { ProductService } from './ProductService';
import ElectronicsRepository from '../repository/ElectronicsRepository';
import ProductDTO from '../dto/ProductDTO';
import ElectronicsModel from '../model/ElectronicsModel';
import { ApiException } from '../../exception/ApiException';

@injectable()
class ElectronicsService extends ProductService {
    @inject(ElectronicsRepository) private ElectronicsRepository!: ElectronicsRepository;
    async createProduct(payload: ProductDTO.CreateProductRequest) {
        const newElectronics = new ElectronicsModel(payload.productAttributes);
        const createdElectronics = await this.ElectronicsRepository.save(newElectronics);
        if (!createdElectronics) {
            throw new ApiException("Failed to create Electronics", "", "", StatusCodes.BAD_REQUEST);
        }
        await super.createProductCommon(payload, createdElectronics.id);
    }
}

export default ElectronicsService;