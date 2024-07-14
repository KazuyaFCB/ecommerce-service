import { injectable } from 'inversify';

import ProductModel, { IProduct } from '../model/ProductModel';

@injectable()
class ProductRepository {
    async findById(productId: string): Promise<IProduct | null> {
        return ProductModel.findById(productId).lean().exec();
    }

    async save(product: IProduct): Promise<IProduct> {
        return product.save();
    }
}

export default ProductRepository;
