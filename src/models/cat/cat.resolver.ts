import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { Cat, CatResponse } from './entities/cat.entity';
import { CreateCatInput, UpdateCatInput } from './dto/cat.input';

@Resolver(() => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => CatResponse, { name: 'cats' })
  findAll() {
    return this.catService.findAll();
  }

  @Query(() => Cat, { name: 'cat' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.catService.findOne(id);
  }

  @Mutation(() => Cat)
  createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
    return this.catService.create(createCatInput);
  }

  @Mutation(() => Cat)
  updateCat(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catService.update(updateCatInput.id, updateCatInput);
  }

  @Mutation(() => Cat)
  removeCat(@Args('id', { type: () => ID }) id: string) {
    return this.catService.remove(id);
  }
}
