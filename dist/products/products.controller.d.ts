import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(dto: CreateProductDto): Promise<import("./interfaces/product.interface").Product>;
    getProductsByName(name: string): Promise<(import("./interfaces/product.interface").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getProductsByCategory(name: string): Promise<(import("./interfaces/product.interface").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getProductsByCountry(name: string): Promise<(import("./interfaces/product.interface").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(id: string, dto: UpdateProductDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    getProductById(id: string): Promise<import("./interfaces/product.interface").Product>;
    getProductsOrderByCreatedAt(orderBy: string, order: string): Promise<(import("./interfaces/product.interface").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
