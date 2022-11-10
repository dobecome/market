import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { DatabaseModule } from "src/db/database.module";
import { productsProviders } from "./products.providers";
import { marketsProviders } from "src/markets/markets.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders, ...marketsProviders],
})
export class ProductsModule {}
