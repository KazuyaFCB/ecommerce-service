import { injectable } from 'inversify';

import ClothingModel, { IClothing } from '../model/ClothingModel';

@injectable()
class ClothingRepository {
    async findById(clothingId: string): Promise<IClothing | null> {
        return ClothingModel.findById(clothingId).lean().exec();
    }

    async save(clothing: IClothing): Promise<IClothing> {
        return clothing.save();
    }
}

export default ClothingRepository;
