import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MarketsModule } from './markets/markets.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule, MarketsModule],
})
export class AppModule {}
