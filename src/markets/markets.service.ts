import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { Market } from './interfaces/market.interface';
import { v4 as uuidv4 } from "uuid";


@Injectable()
export class MarketsService {
  constructor(
    @Inject('MARKET_MODEL')
    private marketModel:Model<Market>,
    @Inject('USER_MODEL')
    private userModel:Model<User>){
  }
  async create(userId: string, dto: CreateMarketDto):Promise<Market> {
    const marketId = await uuidv4();
    const market = await this.marketModel.create({
      id:marketId,
      userId,
      name: dto.name,
    });
    
    // 마켓 등록 시, user 테이블의 marketId 컬럼에 marketId 추가
    // 에러 트러블슈팅 필요
    //[Nest] 69516  - 11/11/2022, 2:29:01 AM   ERROR [ExceptionsHandler] The field 'marketId' must be an array but is of type string in document {_id: ObjectId('636cd3a7a5f808429125a73d')}
    // const user = await this.userModel.updateOne({_id:userId}, { $push: { marketId:marketId } });
    return market.save();
  }
}
