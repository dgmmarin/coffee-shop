import { IsNotEmpty } from "class-validator";

export class ProductAddDto{
    @IsNotEmpty()
    productId: number

    @IsNotEmpty()
    quantity: number

    
    info:string
}