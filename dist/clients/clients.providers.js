"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsProviders = void 0;
const client_entity_1 = require("./entities/client.entity");
exports.ClientsProviders = [
    {
        provide: 'CLIENT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(client_entity_1.Client),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=clients.providers.js.map