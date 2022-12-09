import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  @ApiProperty({
    description: '用户名',
    example: 'name',
  })
  user_name: string;

  @Prop()
  @ApiProperty({
    description: '姓名',
    example: 'name',
  })
  real_name: string;

  @Prop()
  @ApiProperty({
    description: '密码',
    example: '123456',
  })
  user_pwd: string;

  @Prop()
  @ApiProperty({
    description: '邮箱',
    example: '123456@163.com',
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
