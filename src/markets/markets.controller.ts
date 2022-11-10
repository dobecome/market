import { Controller, Post, Body, Param} from '@nestjs/common';
import { MarketsService } from './markets.service';
import { CreateMarketDto } from './dto/create-market.dto';

@Controller('api/markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Post(':userId')
  create(@Param('userId') userId: string, @Body() dto: CreateMarketDto) {
    return this.marketsService.create(userId, dto);
  }

  // @Get()
  // findAll() {
  //   return this.marketsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.marketsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMarketDto: UpdateMarketDto) {
  //   return this.marketsService.update(+id, updateMarketDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.marketsService.remove(+id);
  // }
}
