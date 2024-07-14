import { injectable } from 'inversify';

import ElectronicsModel, { IElectronics } from '../model/ElectronicsModel';

@injectable()
class ElectronicsRepository {
    async findById(electronicsId: string): Promise<IElectronics | null> {
        return ElectronicsModel.findById(electronicsId).lean().exec();
    }

    async save(electronics: IElectronics): Promise<IElectronics> {
        return electronics.save();
    }
}

export default ElectronicsRepository;
