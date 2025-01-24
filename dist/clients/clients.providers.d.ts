import { DataSource } from 'typeorm';
import { Client } from './entities/client.entity';
export declare const ClientsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Client>;
    inject: string[];
}[];
