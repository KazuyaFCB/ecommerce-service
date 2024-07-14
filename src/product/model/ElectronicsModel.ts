import { Schema, model, Document, Types } from 'mongoose';

export interface IElectronics extends Document {
    brand: string;
    size: number;
    material: string;
}

const electronicsSchema = new Schema<IElectronics>({
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
    collection: 'Electronics',
});

const ElectronicsModel = model<IElectronics>('Electronics', electronicsSchema);
export default ElectronicsModel;
