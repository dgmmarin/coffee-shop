import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto): Promise<Product | Error>{
    const product = new Product();
    product.name = createProductDto.name;
    product.um = createProductDto.um;
    product.stock = createProductDto.stock;
    await this.productRepository.save(product);
    return product;
  }

  async findAll() {
    const products = await this.productRepository.find();
    return products;
  }


  async findOne(id: number) {
    return await this.productRepository.findOneOrFail({
      where:{
        id: id
      }
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let product = await this.findOne(id);
    if (updateProductDto.stock != undefined) {
      product.stock = updateProductDto.stock;
    }

    if (updateProductDto.um != undefined) {
      product.um = updateProductDto.um
    }
    return await this.productRepository.save(product);
  }

  async remove(id: number) {
    return await this.productRepository.softDelete({id: id})
  }
}
