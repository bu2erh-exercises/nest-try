import { User, UserDocument } from './user.schema';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('user')
@ApiTags('用户管理')
export class UserController {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  @Get()
  @ApiOperation({ summary: '用户列表' })
  async findAll() {
    return await this.userModel.find().exec();
  }

  @Post()
  @ApiOperation({ summary: '用户列表' })
  async create(@Body() user: User) {
    await this.userModel.create(user);
    return user;
  }
}
