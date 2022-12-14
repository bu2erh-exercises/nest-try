import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  @ApiProperty({
    description: '名字',
    example: 'name',
  })
  cat_name: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
