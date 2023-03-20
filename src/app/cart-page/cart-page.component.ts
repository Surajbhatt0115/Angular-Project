import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
//dependency injection
  constructor(private cartService: CartService,private router:Router) { 
    this.setCart();
  }
  ngOnInit(): void {
  }
// removing from cart
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
//changing the quantity
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
// addding records
  setCart(){
    this.cart = this.cartService.getCart();
  }
// navigating
  BackToHome=()=>this.router.navigate(['/home']);

  orders=()=>this.router.navigate(['/order']);
}
