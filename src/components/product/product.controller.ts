import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EntityNotFoundFilter } from 'src/filters/entity-not-found/entity-not-found.filter';
import { HttpExceptionFilterFilter } from 'src/filters/http-exception-filter/http-exception-filter.filter';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Public } from 'src/services/auth/constants';

@Controller('product')
@UseFilters(new EntityNotFoundFilter(), new HttpExceptionFilterFilter())
export class ProductController {
  constructor(private readonly productService: ProductService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache) { }
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Public()
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    const value = await this.cacheManager.get('key');
    console.log();
    return this.productService.findAll({
      page,
      limit,
      route: 'http://localhost:4000/product',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
