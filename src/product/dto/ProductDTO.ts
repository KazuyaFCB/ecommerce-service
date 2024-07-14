import { IsString, IsNumber, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

namespace ProductDTO {
    export class CreateProductRequest {
        @IsString()
        @IsNotEmpty()
        productName!: string;

        @IsString()
        @IsNotEmpty()
        productThumb!: string;

        @IsString()
        @IsNotEmpty()
        productDescription!: string;

        @IsNumber()
        @IsNotEmpty()
        productPrice!: number;

        @IsString()
        @IsNotEmpty()
        productType!: string;

        @IsNumber()
        @IsNotEmpty()
        productQuantity!: number;

        @IsOptional()
        productAttributes: any;
    }

    export class CreateProductResponse {
        @IsString()
        @IsNotEmpty()
        productName!: string;

        @IsString()
        @IsNotEmpty()
        productThumb!: string;

        @IsString()
        @IsNotEmpty()
        productDescription!: string;

        @IsNumber()
        @IsNotEmpty()
        productPrice!: number;

        @IsString()
        @IsNotEmpty()
        productType!: string;

        @IsNumber()
        @IsNotEmpty()
        productQuantity!: number;

        @IsOptional()
        productAttributes!: any;

        @IsDate()
        @IsNotEmpty()
        createdAt!: Date;

        @IsDate()
        @IsNotEmpty()
        updatedAt!: Date;
    }
}

export default ProductDTO;
