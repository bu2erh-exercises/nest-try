import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './Cat.schema';
import { CreateCatInput, UpdateCatInput } from './dto/cat.input';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
  async create(createCatInput: CreateCatInput) {
    return await this.catModel.create(createCatInput);
  }

  async findAll() {
    const data = await this.catModel.find();
    const total = await this.catModel.find().count();

    return { data, total };
  }

  async findOne(id: string) {
    return await this.catModel.findById(id);
  }

  async update(id: string, updateCatInput: UpdateCatInput) {
    return await this.catModel.findByIdAndUpdate(id, updateCatInput);
  }

  async remove(id: string) {
    return await this.catModel.findByIdAndDelete(id);
  }
}
