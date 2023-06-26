import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:8080',
        /^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):8080$/,
      ],
    },
  });

  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'));

  await app.listen(port);

  logger.log('Server running on port ' + port);
}

bootstrap();
