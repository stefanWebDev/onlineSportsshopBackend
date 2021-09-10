import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }


  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.productsService.findOne(title);
  }

  // @Get(':searchcriteria/:serchterm')
  // find(@Param('title') title: string) {
  //   return this.productsService.findOne(title);
  // }
  @Get('/:searchcriteria/:searchterm')
  async findMany(@Param('searchcriteria') searchcriteria: string, @Param('searchterm') searchterm: string) {
    //return "blalba";
    return this.productsService.findMany(searchcriteria, searchterm);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':title')
  // remove(@Param('title') title: string) {
  //   return this.productsService.remove(title);
  // }
}
