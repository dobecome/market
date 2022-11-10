import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    marketId: mongoose.Types.DocumentArray<any> | any[];
    email?: string;
    hash?: string;
}>;
