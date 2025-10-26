// ...existing code...
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // permitir apenas o frontend em dev
  app.enableCors({
    origin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  //alterar essa rota pra quando o frontend for acessar
  const port = parseInt(process.env.PORT ?? '3001', 10);
  await app.listen(port);
}
bootstrap();
// ...existing code...
