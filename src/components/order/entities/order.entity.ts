import { OrderProduct } from "src/components/order-product/entities/order-product.entity";
import { Product } from "src/components/product/entities/product.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity({name: 'orders'})
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'info',  default: null})
    info:String;

    @OneToMany(() => OrderProduct, orderProduct => orderProduct.order)
    orderProducts: OrderProduct[]
}
