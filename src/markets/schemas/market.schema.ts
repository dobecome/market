import * as mongoose from 'mongoose';

export const MarketSchema = new mongoose.Schema({
  name: String,
  userId: String,
  productId: String,
});