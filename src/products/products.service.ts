import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async create(createProductDto: CreateProductDto):Promise<Product> {
    return new this.productModel(createProductDto).save();
  }

  async findAll() {
    return this.productModel.find();
  }

  findOne(title: string) {
    return this.productModel.findOne({title: title});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(title: string) {
    return this.productModel.deleteOne({title: title});
  }

  findMany(searchcriteria: string, searchterm: string){
    return this.productModel.find({[searchcriteria]: searchterm});
  }
}
