import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }
  ngOnInit() {
    this.getHeroes();
  }
  add(name:string): void{
    name= name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  del(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h!== hero);
    this.heroService.delateHero(hero.id).subscribe();
  }
}
