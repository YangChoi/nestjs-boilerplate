import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { appConst } from "../appConst";
import { ConfigModule, ConfigService } from "../config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        if(process.env.NODE_ENV === appConst.testing || appConst.dev) {
          return {
            type: 'mysql',
            host: configService.get('TEST_DB_HOST'),
            username: configService.get('TEST_DB_USERNAME'),
            password: configService.get('TEST_DB_PASSWORD'),
            database: configService.get('TEST_DB'),
            port: configService.get('TEST_DB_PORT'),
            dropSchema: true,
            synchronize: true,
            entities: [__dirname + './../**/**.entity{.ts,.js}'],
            keepConnectionAlive: false,
          } as TypeOrmModuleAsyncOptions;
        }else {
          // prod version database setting
        }
      }
    })
  ]
})
export class DatabaseModule {}