import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // pure microservice configuration
  /**
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );
  await app.listen();
   */
  // Hybrid Application(Microservice) : HTTP + TCP
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  })
  await app.startAllMicroservices()
  await app.listen(3003)
  console.log(`Application is runnning on ${await app.getUrl()}`)
}
bootstrap();
