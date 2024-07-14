import { IsString, IsNumber, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

namespace ProductDTO {
    export class CreateProductRequest {
        @IsString()
        @IsNotEmpty()
        product_name!: string;

        @IsString()
        @IsNotEmpty()
        product_thumb!: string;

        @IsString()
        @IsNotEmpty()
        product_description!: string;

        @IsNumber()
        @IsNotEmpty()
        product_price!: number;

        @IsString()
        @IsNotEmpty()
        product_type!: string;

        @IsNumber()
        @IsNotEmpty()
        product_quantity!: number;

        @IsOptional()
        product_attributes: any;
    }

    export class CreateProductResponse {
        @IsString()
        @IsNotEmpty()
        product_name!: string;

        @IsString()
        @IsNotEmpty()
        product_thumb!: string;

        @IsString()
        @IsNotEmpty()
        product_description!: string;

        @IsNumber()
        @IsNotEmpty()
        product_price!: number;

        @IsString()
        @IsNotEmpty()
        product_type!: string;

        @IsNumber()
        @IsNotEmpty()
        product_quantity!: number;

        @IsOptional()
        product_attributes!: any;

        @IsDate()
        @IsNotEmpty()
        createdAt!: Date;

        @IsDate()
        @IsNotEmpty()
        updatedAt!: Date;
    }
}

export default ProductDTO;
