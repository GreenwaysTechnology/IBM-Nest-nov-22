import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
// import { grpcClientOptions } from '../grpc-client.options';
import { HeroController } from './hero.controller';
import { join } from 'path';
import { grpcClientOptions } from 'src/grpc-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [HeroController],
})
export class HeroModule { }