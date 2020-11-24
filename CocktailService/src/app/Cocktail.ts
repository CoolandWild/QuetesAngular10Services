import { stringify } from 'querystring';
import { Url } from 'url';

export class Cocktail {
  name: string ;
  price: number ;
  img: string;
  constructor(name: string, price: number, img: string){
    this.name = name;
    this.price = price;
    this.img= img;
}
}
