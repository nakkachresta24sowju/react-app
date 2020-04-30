import React from "react";
import { observable, action, computed, toJS } from "mobx";
import CartItem from "../Models/index";

class CartStore {
  @observable cartProductList: any;
  @observable productStore: any;
  productIds: any;

  constructor(productStore) {
    this.cartProductList = [];
    this.productIds = [];
    this.productStore = productStore;
    console.log(this.productStore, 222222);
  }

  @action.bound
  onClickAddToCart(value) {
    this.productStore.productList.map((obj) => {
      if (obj.productId == value && !this.productIds.includes(value)) {
        this.productIds.push(value);
        this.cartProductList.push(new CartItem(obj));
      }
    });
  }

  @action.bound
  onRemoveCartItem(idvalue) {
    this.cartProductList = this.cartProductList.filter(
      (item) => item.cartItemId != idvalue
    );
  }

  @action.bound
  clearCart() {
    this.cartProductList = [];
    this.productIds = [];
    console.log(this.cartProductList, 4444);
  }

  @action.bound
  getProductDetailsById(id) {
    let object;
    this.productStore.productList.map((obj) => {
      if (obj.productId == id) {
        object = obj;
      }
    });

    return object;
  }
  @computed
  get totalCartAmount() {
    return 1;
  }
  @computed
  get noOfProductsInCart() {
    return this.cartProductList.length;
  }
}
export default CartStore;
