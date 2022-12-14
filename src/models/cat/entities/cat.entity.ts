import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field(() => ID)
  _id?: string;

  @Field(() => String)
  cat_name?: string;
}

@ObjectType()
export class CatResponse {
  @Field(() => Int)
  total?: number;

  @Field(() => [Cat])
  data?: Cat[];
}
