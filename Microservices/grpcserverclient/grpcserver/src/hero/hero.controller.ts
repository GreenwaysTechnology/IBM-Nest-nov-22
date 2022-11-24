import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

@Controller()
export class HeroesController {

  //Grpc Implementation method
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    //biz logic : here we return hardcoded data, later you can connect with this database
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Subramanian' },
      { id: 4, name: 'Karthik' },
      { id: 5, name: 'Ram' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}