import React from "react";
import { observable, action, computed, toJS } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import {
  API_INITIAL,
  API_FETCHING,
  API_SUCCESS,
  API_FAILED,
} from "@ib/api-constants";
import {
  setAccessToken,
  clearUserSession,
} from "../../../../utils/StorageUtils";
import Product from "../Models/index";

class ProductStore {
  @observable getProductListAPIStatus: string = "API_INITIAL";
  @observable sizeFilter: any;
  @observable getProductListAPIError: string = "null";
  @observable sortBy: string = "SELECT";
  productsAPIService: any;
  @observable productList: any;
  sizes: any;

  constructor(productsAPIService) {
    this.productList = [];
    this.sizeFilter = [];
    this.sizes = [];
    this.productsAPIService = productsAPIService;
    this.init();
  }

  @action.bound
  init() {
    this.getProductListAPIStatus = "API_INITIAL";
    this.getProductListAPIError = "null";
  }

  @action.bound
  getProductList() {
    const authPromise = this.productsAPIService.getProductsAPI();
    return bindPromiseWithOnSuccess(authPromise)
      .to(this.setGetProductListAPIStatus, this.setProductListResponse)
      .catch(this.setGetProductListAPIError);
  }

  @action.bound
  setProductListResponse(productsAPIService) {
    setAccessToken(productsAPIService);
    this.productList = productsAPIService.map((obj) => {
      return new Product(obj);
    });
  }

  @action.bound
  setGetProductListAPIError(error) {
    this.getProductListAPIError = error;
  }

  @action.bound
  setGetProductListAPIStatus(apiStatus) {
    this.getProductListAPIStatus = apiStatus;
  }

  @action.bound
  onSelectSortBy(value) {
    this.sortBy = value;
  }
  @action.bound
  onSelectSize(selectedSize) {
    let index = this.sizeFilter.indexOf(selectedSize);
    if (index === -1) {
      this.sizeFilter.push(selectedSize);
    } else {
      this.sizeFilter.splice(index, 1);
    }
    console.log(this.sizeFilter);
  }

  @computed get products() {
    let productListItems = this.productList;
    let productsitems: Array<object> = [];
    this.sizeFilter.forEach((e) => {
      this.productList.map((obj) => {
        if (obj.availableSizes.includes(e)) {
          productsitems.push(obj);
        }
      });
    });
    if (productsitems.length > 0) {
      productListItems = productsitems;
    }
    if (this.sortBy === "DESCENDING") {
      productListItems = productListItems.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === "ASCENDING") {
      productListItems = productListItems.sort((a, b) => b.price - a.price);
    }
    productListItems = productListItems.filter(
      (item, i, ar) => productListItems.indexOf(item) === i
    );
    return productListItems;
  }

  @computed get sortedAndFilteredProducts() {
    console.log("jgdfcga");
    return this.products;
  }

  @computed
  get totalNoOfProductsDisplayed() {
    return this.products.length;
  }
}
export default ProductStore;
