import { observable } from "mobx";

class CartItem {
  @observable productId;
  @observable cartItemId;
  @observable quantity;
  @observable price;
  currencyFormat;
  constructor(obj) {
    this.productId = obj.productId;
    this.cartItemId = Math.random().toString();
    this.quantity = 0;
    this.price = obj.price;
    this.currencyFormat = obj.currencyFormat;
  }
  incrementQuantity = () => {
    this.quantity += 1;
  };
}
export default CartItem;
