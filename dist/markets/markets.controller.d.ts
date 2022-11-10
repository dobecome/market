import { MarketsService } from './markets.service';
import { CreateMarketDto } from './dto/create-market.dto';
export declare class MarketsController {
    private readonly marketsService;
    constructor(marketsService: MarketsService);
    create(userId: string, dto: CreateMarketDto): Promise<import("./interfaces/market.interface").Market>;
}
