import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Card {
  id: string;
  name: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
    getProductsData() {
      return this.http.get<any>('https://api.pokemontcg.io/v2/cards')
    }

    // getProductsMini() {
    //     return Promise.resolve(this.getProductsData().slice(0, 5));
    // }

    // getProductsSmall() {
    //     return Promise.resolve(this.getProductsData().slice(0, 10));
    // }

    // getProducts() {
    //     return Promise.resolve(this.getProductsData());
    // }

    // getProductsWithOrdersSmall() {
    //     return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    // }

    // getProductsWithOrders() {
    //     return Promise.resolve(this.getProductsWithOrdersData());
    // }
};
