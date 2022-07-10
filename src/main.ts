import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { appConst } from './module/appConst';
import { setupSwagger } from './swagger';

async function bootstrap(): Promise<void> {
  const env = process.env.NODE_EVN || appConst.dev;
  const app = await NestFactory.create(AppModule, {
    logger:
      env === appConst.production || env === appConst.staging
        ? ['error', 'warn']
        : ['log', 'verbose', 'error', 'warn'],
  });

  if (process.env.NODE_ENV || 'dev') {
    setupSwagger(app);
  }

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.select(AppModule), { fallbackOnErrors: true };
  await app.listen(3000);
}
bootstrap();
