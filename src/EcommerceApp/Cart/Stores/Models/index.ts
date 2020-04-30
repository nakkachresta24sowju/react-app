import { observable, action } from "mobx";

class CartItem {
  productId;
  cartItemId;
  quantity;
  constructor(obj) {
    this.productId = obj.productId;
    this.cartItemId = Math.random().toString();
    this.quantity = 0;
  }
  @action.bound
  incrementQuantity() {
    this.quantity++;
  }
}
export default CartItem;
