import { OrderProduct } from "src/components/order-product/entities/order-product.entity";
import { Order } from "src/components/order/entities/order.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'um' })
    um: string;
    
    @Column({ name: 'stock' })
    stock: string; 

    @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
    orderProducts: OrderProduct[]
}
