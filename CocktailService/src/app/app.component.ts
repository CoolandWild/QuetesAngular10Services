import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CocktailService';
  private service:CocktailService;

  constructor (param_service: CocktailService) {
    this.service = param_service;
  }
  public ngOnInit(): void {
    this.service.getCocktails().subscribe((param_msg:string) => {
      this.title = param_msg;
    })
  }
}
