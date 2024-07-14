import { Schema, model, Document, Types } from 'mongoose';

export interface IClothing extends Document {
    brand: string;
    size: number;
    material: string;
}

const clothingSchema = new Schema<IClothing>({
    brand: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        readonly: true,
    },
    material: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    collection: 'Clothing',
});

const ClothingModel = model<IClothing>('Clothing', clothingSchema);
export default ClothingModel;
