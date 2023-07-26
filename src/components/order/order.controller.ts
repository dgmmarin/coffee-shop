import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ProductAddDto } from './dto/product-add.dto';
import { EntityNotFoundFilter } from 'src/filters/entity-not-found/entity-not-found.filter';
import { HttpExceptionFilterFilter } from 'src/filters/http-exception-filter/http-exception-filter.filter';
import { Roles } from 'src/services/auth/roles/roles.decorators';
import { Role } from 'src/services/auth/roles/role.enum';

@Controller('order')
@UseFilters(new HttpExceptionFilterFilter(), new EntityNotFoundFilter())
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }
  @Roles(Role.Waiter, Role.Chef)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Post(':id/product')
  productAdd(@Param('id') id: string, @Body() productAdd: ProductAddDto) {
    return this.orderService.addProduct(+id, productAdd);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
