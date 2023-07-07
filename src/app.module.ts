import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './components/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { UserModule } from './components/user/user.module';
import { TableModule } from './components/table/table.module';
import { OrderModule } from './components/order/order.module';
import { RoleModule } from './components/role/role.module';
import { OrderProductModule } from './components/order-product/order-product.module';
import { UserRolesModule } from './components/user-roles/user-roles.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ProductModule,
    UserModule,
    TableModule,
    OrderModule,
    RoleModule,
    OrderProductModule,
    UserRolesModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
