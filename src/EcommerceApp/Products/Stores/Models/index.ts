import { observable } from "mobx";

class Product {
  productId;
  availableSizes;
  title;
  printStyle;
  price;
  isFreeShipping;
  installmentsCount;
  description;
  currencyId;
  currencyFormat;
  imageURL;
  constructor(obj) {
    this.productId = obj.id;
    this.availableSizes = obj.availableSizes;
    this.title = obj.title;
    this.printStyle = obj.style;
    this.price = obj.price;
    this.isFreeShipping = obj.isFreeShipping;
    this.installmentsCount = obj.installments;
    this.description = obj.description;
    this.currencyId = obj.currencyId;
    this.currencyFormat = obj.currencyFormat;
    this.imageURL = obj.image;
  }
}
export default Product;
