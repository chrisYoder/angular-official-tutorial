import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute, // this is specific to each routed component and contains information about the route
    private cartService: CartService, //when we use cartService we can access the methods written in cart.service.ts
  ) { }

  addToCart(product){
    window.alert('Your Product has been added to the cart!');
    this.cartService.addToCart(product); 
  }
  ngOnInit() {
    // This subscribes to the route params and fetch the product based on the productId
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

}