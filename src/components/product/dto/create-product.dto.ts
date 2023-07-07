import { IsNotEmpty, IsNumber, isNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name: String

    @IsNotEmpty()
    um: String

    @IsNumber()
    @IsNotEmpty()
    stock: Number
}
