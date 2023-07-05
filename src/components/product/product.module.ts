import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CheckHeadersMiddleware } from 'src/middlewares/check-headers/check-headers.middleware';

@Module({
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckHeadersMiddleware)
      .forRoutes('product');
  }
}
