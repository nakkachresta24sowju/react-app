import Cookie from "js-cookie";
import {
  API_SUCCESS,
  API_FAILED,
  API_FETCHING,
  API_INITIAL,
} from "@ib/api-constants";
import ProductService from "../../Services/ProductService/index";
import getProductsResponse from "../../Fixtures/getProductsResponse.json";
import ProductStore from "./index";

/*global jest*/
/*global expect */
let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();
Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;

describe("AuthStore Tests", () => {
  let productService;
  let productStore;

  beforeEach(() => {
    productService = new ProductService();
    productStore = new ProductStore(productService);
  });

  it("should test initialising auth store", () => {
    expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
    expect(productStore.getProductListAPIError).toBe(null);
  });
  it("should test data fetching state", () => {
    const mockLoadingPromise = new Promise(function (resolve, reject) {});
    const mockProductAPI = jest.fn();
    mockProductAPI.mockReturnValue(mockLoadingPromise);
    productService.getProductsAPI = mockProductAPI;
    productStore.getProductList();
    expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
  });
  it("it should test productpage success state", async () => {
    const mockSuccessPromise = new Promise(function (resolve, reject) {
      resolve(getProductsResponse);
    });
    const mockProductAPI = jest.fn();
    mockProductAPI.mockReturnValue(mockSuccessPromise);
    productService.getProductsAPI = mockProductAPI;

    await productStore.getProductList();
    expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
    expect(productStore.productList.length).toBe(getProductsResponse.length);
  });
  it("it should test productpage failure state", async () => {
    const mockFailurePromise = new Promise(function (resolve, reject) {
      reject(new Error("error"));
    });
    const mockProductAPI = jest.fn();
    mockProductAPI.mockReturnValue(mockFailurePromise);
    productService.getProductsAPI = mockProductAPI;

    await productStore.getProductList();
    expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
  });

  it("should test sortBy", () => {
    const filterType = "DESCENDING";
    productStore.onSelectSortBy(filterType);
    expect(productStore.sortBy).toBe(filterType);
  });

  it("should test sizefilter", () => {
    const selectedSize = "xs";
    productStore.onSelectSize(selectedSize);
    expect(productStore.sizeFilter).toStrictEqual(Array("xs"));
  });

  it("should test products", () => {
    const products = [
      {
        availableSizes: ["S"],
        price: 1038.6,
      },
      {
        availableSizes: ["S", "XL"],
        price: 848.6,
      },
      {
        availableSizes: ["XS", "M"],
        price: 1200.6,
      },
    ];
    productStore.setProductListResponse(products);
    productStore.onSelectSortBy("DESCENDING");
    expect(productStore.sortBy).toBe("DESCENDING");
    productStore.onSelectSize("S");
    expect(productStore.sizeFilter).toStrictEqual(Array("S"));
    const filteredProducts = [
      {
        availableSizes: ["S"],
        price: 1038.6,
      },
      {
        availableSizes: ["S", "XL"],
        price: 848.6,
      },
    ];
    console.log(productStore.products);
    expect(productStore.products).toEqual(filteredProducts);
  });
});
