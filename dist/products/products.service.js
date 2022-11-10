"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(dto) {
        const product = new this.productModel(dto);
        return product.save();
    }
    async findAll() {
        const products = this.productModel.find();
        return products.exec();
    }
    async update(id, dto) {
        const product = this.productModel.updateOne({ _id: id }, { $set: Object.assign({}, dto) });
        return product.update();
    }
    async remove(id) {
        return await this.productModel.deleteOne({ _id: id });
    }
    async getProductsByName(name) {
        const product = this.productModel.find({
            name: { $regex: ".*" + name + ".*" },
        });
        return product;
    }
    async getProductsByCategory(name) {
        const product = this.productModel.find({
            category: { $regex: ".*" + name + ".*" },
        });
        return product;
    }
    async getProductsByCountry(name) {
        const product = this.productModel.find({
            country: { $regex: ".*" + name + ".*" },
        });
        return product;
    }
    async getProductById(id) {
        const products = this.productModel.findOne({ _id: id });
        return products.exec();
    }
    async getProductsOrderByCreatedAt(orderBy, order) {
        const products = this.productModel
            .find({})
            .sort({ [orderBy]: order === "desc" ? -1 : 1 });
        return products.exec();
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PRODUCT_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map