import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient,
  ) {}

  items=[];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items
  }
  
  //this is cool. you can get data from several sources and 'combine' before you serve them to a component. I would also imagine that you can have several components reference the same service
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}