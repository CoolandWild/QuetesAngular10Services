import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './Cocktail';
import { throttleTime, map, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private service: HttpClient;
  constructor(param_service: HttpClient) {
    this.service = param_service;
  }
  // cocktail1 = new Cocktail("Pinacolada", 12,"../assets/img/images.jpg" );
  // cocktail2 = new Cocktail("Margarita", 12,"../assets/img/téléchargement (1).jpg" );
  // cocktail3 = new Cocktail("Bluelagoon", 12,"../assets/img/téléchargement.jpg" );

  // cocktails: Cocktail[] ;
  //=[this.cocktail1,this.cocktail2,this.cocktail3]

  public getCocktails(): Observable<string> {
    const obs1:Observable<any> = this.service.get("asset/cocktails.json")
    const  treatment  = ( param_data:any) => {
      return  param_data.msg  as  string;
    };
    return  obs1.pipe( map(treatment) );
  }
}
