//import React from "react";
import { observable, action, computed, toJS } from 'mobx'
import CartItem from '../Models/index'

class CartStore {
   @observable cartProductList: any
   @observable paginationStore: any
   productIds: any
   currency: any

   constructor(paginationStore) {
      this.cartProductList = []
      this.productIds = []
      this.paginationStore = paginationStore
   }

   @action.bound
   onClickAddToCart(value) {
      console.log(value)
      console.log(this.paginationStore.productList, 'productList')
      this.paginationStore.productList.map(obj => {
         if (obj.productId == value && !this.productIds.includes(value)) {
            this.productIds.push(value)
            this.cartProductList.push(new CartItem(obj))
         }
      })
      console.log(this.cartProductList, 'cartItems')
      this.cartProductList.map(obj => {
         if (obj.productId == value && this.productIds.includes(value))
            obj.incrementQuantity()
      })
   }

   @action.bound
   onRemoveCartItem(idvalue) {
      this.cartProductList = this.cartProductList.filter(
         item => item.cartItemId != idvalue
      )
   }

   @action.bound
   clearCart() {
      this.cartProductList = []
      this.productIds = []
   }

   @action.bound
   getProductDetailsById(id) {
      let object
      this.paginationStore.productList.map(obj => {
         if (obj.productId == id) {
            object = obj
            console.log(obj)
         }
      })
      return object
   }
   @computed
   get itemsQuantity() {
      let quantity = 0
      this.cartProductList.map(obj => {
         quantity = quantity + obj.quantity
      })
      return quantity
   }

   @computed
   get totalCartAmount() {
      let productsCost = 0
      this.cartProductList.map(obj => {
         productsCost = productsCost + obj.price
      })
      return productsCost
   }

   // @computed
   // get noOfProductsInCart() {
   //   return this.cartProductList.length;
   // }
}
export { CartStore }
