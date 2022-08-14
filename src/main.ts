import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';

async function bootstrap() {
  dynamoose.aws.sdk.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    region: 'REGION_NAME',
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
