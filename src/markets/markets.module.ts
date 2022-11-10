import { Module } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { MarketsController } from './markets.controller';
import { DatabaseModule } from 'src/db/database.module';
import { marketsProviders } from './markets.providers';
import { usersProviders } from 'src/users/users.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [MarketsController],
  providers: [MarketsService, ...marketsProviders, ...usersProviders]
})
export class MarketsModule {}
