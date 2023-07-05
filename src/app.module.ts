import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './components/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { UserModule } from './components/user/user.module';
import { TableModule } from './components/table/table.module';
import { OrderModule } from './components/order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ProductModule,
    UserModule,
    TableModule,
    OrderModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
