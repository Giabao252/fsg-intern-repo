import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import cors from 'cors';

async function bootstrap() {
    dotenv.config();
    const app = await NestFactory.create(AppModule);
    //enable cors
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials:true,            //access-control-allow-credentials:true
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
    });
    await app.listen(8080);
}
bootstrap();
