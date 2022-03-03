import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseAddAccessTokenToHeaderInterceptor } from './auth/interceptors/response-add-access-token-to-header.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
