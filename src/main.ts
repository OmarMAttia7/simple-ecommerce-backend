import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);
  console.log(`Application is running at http://localhost:${port}`);
}
bootstrap();
