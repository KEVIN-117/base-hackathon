import { ConflictException, Controller, Logger, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    logger: Logger;
    constructor(private readonly userService: UsersService){
        this.logger = new Logger(UsersController.name)
    }

    @Post ('create')
    async create(@Request() req): Promise<any> {
        const newUser = req.body;
        try {
          const query = { email: newUser.email };
          const isUser = await this.userService.findOne(query);
          if (isUser) throw new ConflictException('User Already Exist');
          const user = await this.userService.create(newUser);
          return user;
        } catch (err) {
          this.logger.error('Something went wrong in signup:', err);
          throw err;
        }
      }
    
}
