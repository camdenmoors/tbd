import {SequelizeModule} from '@nestjs/sequelize';
import {Module} from '@nestjs/common';
import { DatabaseService } from './database.services';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useFactory: async () => ({
                uri: 'postgres://postgres:postgres@localhost:5432/postgres',
            }),
        }),
    ],
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule {}