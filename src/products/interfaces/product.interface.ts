import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly cost: number;
  readonly category: string;
  readonly country: string;
  readonly expiredAt: Date;
  readonly marketId: string;
}