import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'note',
        protoPath: join(__dirname, 'note/note.proto'),
        url: 'localhost:3001',
      },
    },
  );
  await app.listen();
}
bootstrap();
