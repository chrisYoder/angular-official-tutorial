import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { CartService } from '../cart.service'; //I need this to gain access to the items array

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService, //when we use cartService we can access the methods written in cart.service.ts
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '', 
      address: '', 
    });
   }

   onSubmit(customerData) {
     console.warn('Your order has been submitted', customerData);

     this.items = this.cartService.clearCart();
     this.checkoutForm.reset();
   }

  ngOnInit() {
    // this is goin to grab the values in items in cart.service and store them in this.items
    this.items = this.cartService.getItems();
  }

}