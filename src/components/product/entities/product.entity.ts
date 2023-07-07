import { OrderProduct } from "src/components/order-product/entities/order-product.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name' })
    name: String;

    @Column({ name: 'um' })
    um: String;
    
    @Column({ name: 'stock' })
    stock: Number; 

    @Column({ name: 'created_at', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
    
    @Column({ name: 'updated_at', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
    orderProducts: OrderProduct[]
}
