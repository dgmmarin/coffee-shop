import { Order } from "src/components/order/entities/order.entity";
import { Product } from "src/components/product/entities/product.entity";

export class CreateOrderProductDto {
    order: Order
    product: Product
    quantity: number
    info: string
}
