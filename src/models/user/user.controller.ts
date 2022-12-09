import { Id, User, UserDocument } from './user.schema';
import { Body, Controller, Post } from '@nestjs/common';

import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
console.log(User);

@Controller('user')
@ApiTags('用户管理')
export class UserController {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  @Post()
  @ApiOperation({ summary: '用户列表' })
  async findAll() {
    console.log(User);

    return await this.userModel.find().exec();
  }

  @Post('detail')
  @ApiOperation({ summary: '用户' })
  @ApiProperty({
    description: 'ID',
    example: '123456',
  })
  async findOne(@Body() user: Id) {
    return await this.userModel.findById(user._id);
  }

  @Post('create')
  @ApiOperation({ summary: '用户列表' })
  async create(@Body() user: User) {
    await this.userModel.create(user);
    return user;
  }

  @Post('update')
  @ApiOperation({ summary: '用户列表' })
  async update(@Body() user: User) {
    // await this.userModel.update(user._id, user);
    return user;
  }

  @Post('delete')
  @ApiOperation({ summary: '用户列表' })
  async delete(@Body() user: Id) {
    await this.userModel.remove(user._id);
    return user;
  }
}
