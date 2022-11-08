import { MarketsService } from './markets.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
export declare class MarketsController {
    private readonly marketsService;
    constructor(marketsService: MarketsService);
    create(createMarketDto: CreateMarketDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMarketDto: UpdateMarketDto): string;
    remove(id: string): string;
}
