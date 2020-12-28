import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../Cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktails : Cocktail[];
  constructor(public monService:CocktailService) { }

  ngOnInit(): void {
    this.cocktails = this.monService.getCocktails();
    console.log(this.cocktails);
  }
}
