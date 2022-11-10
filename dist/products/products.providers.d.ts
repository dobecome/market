import { Connection } from 'mongoose';
export declare const productsProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name?: string;
        cost?: number;
        category?: string;
        country?: string;
        expiredAt?: Date;
        marketId?: string;
    }, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        name?: string;
        cost?: number;
        category?: string;
        country?: string;
        expiredAt?: Date;
        marketId?: string;
    }>>;
    inject: string[];
}[];
