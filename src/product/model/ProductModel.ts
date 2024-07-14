import { Schema, model, Document, Types } from 'mongoose';

export interface IProduct extends Document {
    product_name: string;
    product_thumb: string;
    product_description: string;
    product_price: number;
    product_type: string;
    product_quantity: number;
    product_attributes: Types.ObjectId;
}

const productSchema = new Schema<IProduct>({
    product_name: {
        type: String,
        required: true,
    },
    product_thumb: {
        type: String,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_type: {
        type: String,
        required: true,
    },
    product_quantity: {
        type: Number,
        required: true,
    },
    product_attributes: {
        type: Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
    collection: 'Products',
});

const ProductModel = model<IProduct>('Product', productSchema);
export default ProductModel;
