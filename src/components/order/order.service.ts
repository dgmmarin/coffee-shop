import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrderProductService } from '../order-product/order-product.service';
import { ProductService } from '../product/product.service';
import { ProductAddDto } from './dto/product-add.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @Inject(OrderProductService) private orderProductService: OrderProductService,
    @Inject(ProductService) private productService: ProductService
  ){

  }
  async create(createOrderDto: CreateOrderDto) {
    let order = new Order();
    return await this.orderRepository.save(order);
  }

  async findAll() {
    return await this.orderRepository.find({relations:["orderProducts.product"]});
  }

  async addProduct(id:number, productAdd: ProductAddDto) {
    let order = await this.orderRepository.findOneOrFail({where: {id: id}});
    let product = await this.productService.findOne(productAdd.productId);
    let orderProduct = await this.orderProductService.create({
      order: order,
      product: product,
      quantity: productAdd.quantity,
      info: productAdd.info
    });

    console.log(orderProduct);
    order = await this.orderRepository.findOneOrFail({where: {id: id},relations:["orderProducts.product"]});
    return await this.orderRepository.save(order);
  }

  async findOne(id: number) {
    return await this.orderRepository.findOneOrFail({where: {id:id},relations:["orderProducts.product"]});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    let order = await this.findOne(id);
    order.status = updateOrderDto.status ?? order.status;
    order.info = updateOrderDto.info ?? order.info;
    return await this.orderRepository.save(order);
    
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
