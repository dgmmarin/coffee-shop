import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct) private orderProductRepository: Repository<OrderProduct>
  ) { }
  async create(createOrderProductDto: CreateOrderProductDto) {
    let orderProduct = new OrderProduct();
    orderProduct.info = createOrderProductDto.info;
    orderProduct.order = createOrderProductDto.order;
    orderProduct.product = createOrderProductDto.product;
    orderProduct.quantity = createOrderProductDto.quantity;
    return await this.orderProductRepository.save(orderProduct);
  }

  findAll() {
    return `This action returns all orderProduct`;
  }

  findOne(id: number) {
    return this.orderProductRepository.findOneBy({
      id: id
    })
  }

  update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    return `This action updates a #${id} orderProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderProduct`;
  }
}
