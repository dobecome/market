import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    cost?: number;
    category?: string;
    country?: string;
    expiredAt?: Date;
    marketId?: string;
}>;
