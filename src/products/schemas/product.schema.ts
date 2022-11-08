import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  expiredAt: Date,
});