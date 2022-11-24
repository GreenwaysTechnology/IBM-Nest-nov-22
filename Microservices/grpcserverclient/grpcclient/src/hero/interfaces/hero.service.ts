import { Observable } from "rxjs";
import { HeroById } from "./hero-by-id.interface";
import { Hero } from "./hero.interface";
export interface HeroService {
    findOne(data: HeroById): Observable<Hero>;
}