import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroesImported: Hero[];
  selectedHero: Hero;

  hero2: Hero = {
    id: 1,
    name: 'Windstorm2'
  };

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroesFromService();
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroesFromServiceA(): void {
    this.heroesImported = this.heroService.getHeroesA();
 }

  getHeroesFromService(): void {
     this.heroService.getHeroes().subscribe(heroesFromService => this.heroesImported = heroesFromService);
  }
}


