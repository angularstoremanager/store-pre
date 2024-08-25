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
export class YugiohService {

  constructor(private http: HttpClient) { }
    getSetsData() {
      return this.http.get<any>('http://yugiohprices.com/api/card_sets')
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
