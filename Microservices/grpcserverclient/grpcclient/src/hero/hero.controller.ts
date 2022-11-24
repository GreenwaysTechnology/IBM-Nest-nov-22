import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import {
  ClientGrpc
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';
import { HeroService } from './interfaces/hero.service';

@Controller('hero')
export class HeroController implements OnModuleInit {

  private heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) { }

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroesService');
   // this.heroService.findOne({ id: 1 }).subscribe(x => console.log(x));
  }

  @Get(':id')
  getById(@Param('id') id: string): Observable<Hero> {
    return this.heroService.findOne({ id: +id });
  }


}
