import { Schema, model, Document, Types } from 'mongoose';

export interface IProduct extends Document {
    productName: string;
    productThumb: string;
    productDescription: string;
    productPrice: number;
    productType: string;
    productQuantity: number;
    productAttributes: Types.ObjectId;
}

const productSchema = new Schema<IProduct>({
    productName: {
        type: String,
        required: true,
    },
    productThumb: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productType: {
        type: String,
        required: true,
    },
    productQuantity: {
        type: Number,
        required: true,
    },
    productAttributes: {
        type: Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
    collection: 'Products',
});

const ProductModel = model<IProduct>('Product', productSchema);
export default ProductModel;
