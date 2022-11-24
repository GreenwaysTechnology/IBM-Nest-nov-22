import { HeroById } from './hero-by-id.interface';
import { Hero } from './hero.interface';
import { Observable } from 'rxjs';

export interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
}
