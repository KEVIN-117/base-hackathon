import { Body, Controller, Get, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guard/auth.guard';
//import { JwtAuthGuard } from 'src/guard/auth.guard';
import { LoginUser } from './dto/auth.dto';


import { ApiBearerAuth } from '@nestjs/swagger';



@Controller('auth')
@ApiBearerAuth()
export class AuthController {
    logger: Logger;
  constructor(private readonly authService: AuthService) {
    this.logger = new Logger(AuthController.name);
  }

  @Post('login')
  //@UseGuards(LocalAuthGuard)
  async login(@Body() loginUser: LoginUser): Promise<any> {
    try {
      //return req.user;
      return await this.authService.generateJwtToken(loginUser);
    } catch (error) {
      throw error;
    }

  }

  @UseGuards(AuthGuard)
  @Get('viewProfile')
  async getUser(): Promise<any> {
    return { resp: 'token valido' };
  }



}


