import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/components/user/user.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
      ) {}
    async signIn(email, pass) {
        const user = await this.usersService.findOneByEmail(email);
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email, roles:user.roles.map((elem) => elem.name) };
        return {
          access_token: await this.jwtService.signAsync(payload, {
            secret: jwtConstants.secret
          }),
        };
      }
}
