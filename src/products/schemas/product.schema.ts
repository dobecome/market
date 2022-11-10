import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  category: String,
  country: String,
  expiredAt: Date,
  marketId: String,
});