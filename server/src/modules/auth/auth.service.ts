import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUser } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private UserService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validaterUser(email: string, password: string): Promise<any> {
    const query = { email: email };
    const user = await this.UserService.findOne(query);
    if (!user) throw new NotFoundException('email does not exist ');
    const isMatched = await this.comparePasswords(password, user.password);
    if (!isMatched) throw new UnauthorizedException('Invalid Password');
    return user;
  }
  
  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: 'JWT_SECRET',
    });
  }

  async generateJwtToken(loginUser: LoginUser) {
    const payload = {
      username: loginUser.username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };

  }

  async getHashedPassword(password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  }

  async comparePasswords(password: string, hashedPassword: string): Promise<any> {
    return bcrypt
      .compare(password, hashedPassword)
      .then((isMatch) => {
        if (isMatch) return true;
        return false;
      })
      .catch((err) => err);
  }

}
