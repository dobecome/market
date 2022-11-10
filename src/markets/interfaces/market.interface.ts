import { Document } from 'mongoose';

export interface Market extends Document {
  readonly name: string;
  readonly userId: string;
  readonly productId: string;
}