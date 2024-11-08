import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from 'src/guard/jwtStratergy';
import { LocalStrategy } from 'src/guard/localStrategy';
import { AuthGuard } from 'src/guard/auth.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'JWT_SECRET', 
      signOptions: { expiresIn: '1d' }, 
    }),
    forwardRef(() => UsersModule),
    PassportModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy, AuthGuard],
  exports: [AuthService],
})
export class AuthenticationModule {}
