import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.schema';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {

  logger: Logger;
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @Inject(forwardRef(()=> AuthService))
    private AuthService: AuthService
  ){
    this.logger = new Logger(UsersService.name);
  }

  async findOne(query: any ): Promise<any>{
    return await this.userModel.findOne(query).select('+password');
  }
  async create(user:any): Promise<any>{
    this.logger.log('Creating User');
    const hashedPassword = await this.AuthService.getHashedPassword(user.password);
    user.password = hashedPassword;
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneAndUpadte(query: any, payload: any ):Promise<any>{
    this.logger.log('Updating User');
    return this.userModel.findOneAndUpdate(query, payload, {
        new: true,
        upsert: true,
    })
  }

  async findOneAndRemove(query: any): Promise<any> {
    return this.userModel.findOneAndDelete(query);
  }



}
