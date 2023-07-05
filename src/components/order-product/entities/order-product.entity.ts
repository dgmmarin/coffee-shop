import { Column, PrimaryGeneratedColumn } from "typeorm";

export class OrderProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'order_id'})
    orderID: number;

    @Column({name: 'product_id'})
    productID: number

    @Column({name: 'quantity'})
    quantity: number;

    @Column({name: 'info'})
    info:String;
}
