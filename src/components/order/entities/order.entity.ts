import { Product } from "src/components/product/entities/product.entity";
import { OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Order {
    @PrimaryGeneratedColumn()
    id: number;
}
