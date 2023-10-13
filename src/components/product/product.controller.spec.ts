import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/services/auth/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'src/config/typeorm.config';
import { ProductModule } from './product.module';
import { IPaginationMeta, Pagination } from 'nestjs-typeorm-paginate';
import { Product } from './entities/product.entity';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ProductModule,
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '3600s' },
        }),
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
      ],
      controllers: [ProductController],
      providers: [ProductService],
      exports: [ProductService],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result: Promise<Pagination<Product, IPaginationMeta>> = new Promise((resolve, reject) => resolve({  items: [], meta: { itemCount: 0, totalItems: 0, itemsPerPage: 0, totalPages: 0, currentPage: 0 } }));
      // jest.spyOn(productService, 'findAll').mockImplementation(() => result);
      expect(await productController.findAll()).toMatchObject(result);
    });
  });
});
