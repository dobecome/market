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
exports.MarketsController = void 0;
const common_1 = require("@nestjs/common");
const markets_service_1 = require("./markets.service");
const create_market_dto_1 = require("./dto/create-market.dto");
let MarketsController = class MarketsController {
    constructor(marketsService) {
        this.marketsService = marketsService;
    }
    create(userId, dto) {
        return this.marketsService.create(userId, dto);
    }
};
__decorate([
    (0, common_1.Post)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_market_dto_1.CreateMarketDto]),
    __metadata("design:returntype", void 0)
], MarketsController.prototype, "create", null);
MarketsController = __decorate([
    (0, common_1.Controller)('api/markets'),
    __metadata("design:paramtypes", [markets_service_1.MarketsService])
], MarketsController);
exports.MarketsController = MarketsController;
//# sourceMappingURL=markets.controller.js.map