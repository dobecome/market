import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./interfaces/product.interface";
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(dto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    update(id: string, dto: UpdateProductDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    getProductsByName(name: string): Promise<(Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getProductsByCategory(name: string): Promise<(Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getProductsByCountry(name: string): Promise<(Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getProductById(id: string): Promise<Product>;
    getProductsOrderByCreatedAt(orderBy: string, order: string): Promise<(Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
