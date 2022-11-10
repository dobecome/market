import { Module } from "@nestjs/common";
import { MarketsModule } from "./markets/markets.module";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:8081/market'),
    UsersModule,
    ProductsModule,
    MarketsModule,
  ],
})
export class AppModule {}
