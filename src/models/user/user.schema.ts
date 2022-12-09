import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

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

export class Id extends User {
  @ApiProperty({
    description: 'Id',
    example: '',
  })
  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
