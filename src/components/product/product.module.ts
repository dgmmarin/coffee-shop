import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CheckHeadersMiddleware } from 'src/middlewares/check-headers/check-headers.middleware';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports:[ProductService]
})
export class ProductModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckHeadersMiddleware)
      .forRoutes('product');
  }
}
