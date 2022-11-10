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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const argon = require("argon2");
const mongoose_1 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(dto) {
        const newHash = await argon.hash(dto.hash);
        return this.userModel.create({
            userId: (0, uuid_1.v4)(),
            email: dto.email,
            hash: newHash,
            marketId: dto.marketId,
        });
    }
    async signin(email, pw) {
        const hash = await argon.hash(pw);
        const user = this.userModel.findOne({
            where: {
                email,
                hash,
            },
        });
        return user.exec();
    }
    async getUserById(userId) {
        return this.userModel.findOne({ userId });
    }
    async findAll() {
        const users = this.userModel.find();
        return users.exec();
    }
    async updateUser(userId, userUpdates) {
        return this.userModel.findOneAndUpdate({ userId }, userUpdates);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map