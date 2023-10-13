import { IsNotEmpty, IsNumber, isNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  um: string;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
