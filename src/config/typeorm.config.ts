import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async():Promise<TypeOrmModuleOptions> => {
        return {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'ParolaMySql8392',
            database: 'coffee-shop',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../database/migrations/*{.ts/.js}'],
            migrationsTableName: 'migrations',
            logging: true,
            synchronize:true,
            migrationsRun: true,
            extra:{
                insecureAuth: true,   
            }
        };
    }
}