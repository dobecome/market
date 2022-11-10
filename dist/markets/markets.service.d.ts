import { Model } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';
import { CreateMarketDto } from './dto/create-market.dto';
import { Market } from './interfaces/market.interface';
export declare class MarketsService {
    private marketModel;
    private userModel;
    constructor(marketModel: Model<Market>, userModel: Model<User>);
    create(userId: string, dto: CreateMarketDto): Promise<Market>;
}
