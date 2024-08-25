import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    getCards(): Observable<Card[]> {
      return this.http.get<any>('https://api.pokemontcg.io/v2/cards')
    }

    getSets(): Observable<Card[]> {
      return this.http.get<any>('https://api.pokemontcg.io/v2/sets')
    }
};
