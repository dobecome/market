import { Connection } from 'mongoose';
export declare const usersProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        marketId: import("mongoose").Types.DocumentArray<any> | any[];
        email?: string;
        hash?: string;
    }, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
        marketId: import("mongoose").Types.DocumentArray<any> | any[];
        email?: string;
        hash?: string;
    }>>;
    inject: string[];
}[];
