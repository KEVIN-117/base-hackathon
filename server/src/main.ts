import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Base Api Documentation')
    .setDescription('This is the base api documentation')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('statistic')
    .addBearerAuth()
    .addApiKey({ type: 'apiKey', name: 'apiKey', in: 'header' })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  app.setGlobalPrefix('api');
  const logger = new Logger('bootstrap');
  const { PORT } = envs;
  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}`);
  logger.log(`Application running in ${process.env.NODE_ENV} mode`);
  logger.log(`Application Docs in URL http://localhost:${PORT}/docs`);
  logger.log(`Application API running in URL http://localhost:${PORT}/api`);
}
bootstrap();
