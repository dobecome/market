import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  // @Get()
  // findAll() {
  //   return this.productsService.findAll();
  // }

  @Get('name')
  getProductsByName(@Query('name') name: string) {
    return this.productsService.getProductsByName(name);
  }

  @Get('category')
  getProductsByCategory(@Query('name') name: string) {
    return this.productsService.getProductsByCategory(name);
  }

  @Get('country')
  getProductsByCountry(@Query('name') name: string) {
    return this.productsService.getProductsByCountry(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Get(':id')
  getProductById(@Param('id') id : string) {
    return this.productsService.getProductById(id);
  }

  @Get()
  getProductsOrderByCreatedAt(@Query('order_by') orderBy: string, @Query('order') order : string) {
    return this.productsService.getProductsOrderByCreatedAt(orderBy, order);
  }
}
