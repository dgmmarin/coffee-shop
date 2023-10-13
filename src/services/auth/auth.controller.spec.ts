import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/components/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { typeOrmAsyncConfig } from 'src/config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UserModule,
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '3600s' },
        }),
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
      ],
      controllers: [AuthController],
      providers: [AuthService],
      exports: [AuthService],
    }).compile();
    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should return a token', async () => {
      const result: Promise<{ access_token: string; }> = new Promise((resolve, reject) => resolve({"access_token":""}));
      jest.spyOn(service, 'signIn').mockImplementation(() => result);
      expect(await controller.signIn({ email: "daniel.marin+1@boostit.com", password: "parola123" })).toMatchObject({ access_token: expect.any(String) });
    });
  });
});
