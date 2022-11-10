import { Connection } from 'mongoose';
export declare const usersProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        email?: string;
        hash?: string;
        marketId?: string;
    }, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        email?: string;
        hash?: string;
        marketId?: string;
    }>>;
    inject: string[];
}[];
