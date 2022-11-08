import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
export declare class MarketsService {
    create(createMarketDto: CreateMarketDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMarketDto: UpdateMarketDto): string;
    remove(id: number): string;
}
