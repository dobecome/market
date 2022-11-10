import { CreateProductDto } from "./create-product.dto";
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    name: string;
    cost: number;
    category: string;
    country: string;
    expiredAt: Date;
    marketId: string;
}
export {};
