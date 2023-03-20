import { CartItem } from "./CartItems";

export class Cart{
    items:CartItem[] = [];
// calculating the price and returning total price
    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

        return totalPrice;
    }
}