import { Injectable } from '@angular/core';
import { Cart } from './shared/models/Cart';
import { CartItem } from './shared/models/CartItems';
import { Food } from './shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  // adding to cart
  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
//removing from cart
  removeFromCart(foodId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.id != foodId);
  }
// changing the quantity of items
  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
// showing item added to cart
  getCart():Cart{
    return this.cart;
  }
}
