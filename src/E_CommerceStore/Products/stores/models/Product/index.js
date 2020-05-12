import { observable } from "mobx";


class Product {

      @observable productId
      @observable availableSizes
      @observable currencyFormat
      @observable currencyId
      @observable description
      @observable installmentsCount
      @observable isFreeShipping
      @observable price
      @observable printStyle
      @observable title
      @observable imageURL

      constructor(Data) {
            this.productId = Data.id;
            this.availableSizes = Data.availableSizes;
            this.currencyFormat = Data.currencyFormat;
            this.currencyId = Data.currencyId;
            this.description = Data.description;
            this.installmentsCount = Data.installments;
            this.isFreeShipping = Data.isFreeShipping;
            this.price = Data.price;
            this.printStyle = Data.style;
            this.title = Data.title;
            this.imageURL = Data.image;
      }
}

export default Product;



/*
availableSizes: (2) ["S", "XS"]
currencyFormat: "₹"
currencyId: "USD"
description: "4 MSL"
id: 12
installments: 9
isFreeShipping: true
price: 845.24
sku: 12064273040195392
style: "Black with custom print"
title: "Cat Tee Black T-Shirt"
image: "https://react-shopping-cart-6795*/
