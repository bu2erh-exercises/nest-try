import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class CreateCatInput {
  @Field(() => String)
  cat_name: 'string12312';
}

@InputType()
export class UpdateCatInput extends PartialType(CreateCatInput) {
  @Field(() => ID)
  id: string;
}
