import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
   cocktail1 = new Cocktail("Pinacolada", 12,"../assets/img/images.jpg" );
   cocktail2 = new Cocktail("Margarita", 12,"../assets/img/téléchargement (1).jpg" );
   cocktail3 = new Cocktail("Bluelagoon", 12,"../assets/img/téléchargement.jpg" );

   cocktails: Cocktail[] =[this.cocktail1,this.cocktail2,this.cocktail3]
  constructor() { }

  getCocktails(): any {
    return this.cocktails;
  }
}
