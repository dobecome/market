import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MarketsModule } from './markets/markets.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    UsersModule, ProductsModule, MarketsModule
  ],
})
export class AppModule {}
