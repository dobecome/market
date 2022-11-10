import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./interfaces/product.interface";

@Injectable()
export class ProductsService {
  constructor(
    @Inject("PRODUCT_MODEL")
    private productModel: Model<Product>
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(dto);
    return product.save();
  }

  async findAll(): Promise<Product[]> {
    const products = this.productModel.find();
    return products.exec();
  }

  async update(id: string, dto: UpdateProductDto) {
    const product = this.productModel.updateOne(
      { _id: id },
      { $set: { ...dto } }
    );
    return product.update();
  }

  async remove(id: string) {
    return await this.productModel.deleteOne({ _id: id });
  }

  async getProductsByName(name: string) {
    const product = this.productModel.find({
      name: { $regex: ".*" + name + ".*" },
    });
    return product;
  }

  async getProductsByCategory(name: string) {
    const product = this.productModel.find({
      category: { $regex: ".*" + name + ".*" },
    });
    return product;
  }

  async getProductsByCountry(name: string) {
    const product = this.productModel.find({
      country: { $regex: ".*" + name + ".*" },
    });
    return product;
  }

  async getProductById(id: string): Promise<Product> {
    const products = this.productModel.findOne({ _id: id });
    return products.exec();
  }

  async getProductsOrderByCreatedAt(
    orderBy: string,
    order: string
  ){
    const products = this.productModel
      .find({})
      .sort({ [orderBy]: order === "desc" ? -1 : 1 });
    return products.exec();
  }
}
