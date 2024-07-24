import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Role } from './role/role.entity';
import { Pet } from './pet/pet.entity';
import { Cart } from './cart/cart.entity';
import database from '../config/database';
import { UserController } from './user/user.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [database],
            isGlobal: true,
            envFilePath: '.env',
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get<string>('database.host'),
                port: configService.get<number>('database.port'),
                username: configService.get<string>('database.username'),
                password: configService.get<string>('database.password'),
                database: configService.get<string>('database.name'),
                entities: [User, Pet, Role, Cart],
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController, UserController],
    providers: [AppService],
})
export class AppModule { }
