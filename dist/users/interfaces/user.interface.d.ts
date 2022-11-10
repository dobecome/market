import { Document } from 'mongoose';
export interface User extends Document {
    readonly email: string;
    readonly hash: string;
    readonly marketId: string;
}
