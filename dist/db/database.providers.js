"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://mongo:1234qwer!@localhost:27017/market?authSource=admin&w=1'),
    },
];
//# sourceMappingURL=database.providers.js.map