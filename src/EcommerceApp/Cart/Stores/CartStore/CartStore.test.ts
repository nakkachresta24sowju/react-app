import ProductStore from "../../../Products/Stores/ProductStore/index";
import ProductService from "../../../Products/Services/ProductService/index";
import CartStore from "../CartStore/index";
/*global jest*/
/*global expect */

describe("CartStore Tests", () => {
  let productService;
  let productStore;
  let cartStore;

  beforeEach(() => {
    productService = new ProductService();
    productStore = new ProductStore(productService);
    cartStore = new CartStore(productStore);
  });

  it("should test initialising cartStore", () => {
    expect(cartStore.cartProductList).toStrictEqual(Array());
    expect(cartStore.productStore).toBe(productStore);
  });

  it("should test Onclick Add Cart", () => {
    //console.log(cartStore.productStore.productList, 4444);
    const products = [
      {
        id: 12,
        title: "black t-shirt",
        quantity: 0,
        price: 1072.46,
      },
      {
        id: 1,
        title: "blue t-shirt",
        quantity: 0,
        price: 692.46,
      },
    ];
    cartStore.productStore.setProductListResponse(products);
    const productId = 12;
    cartStore.onClickAddToCart(productId);
    expect(cartStore.cartProductList.length).toBe(1);
    cartStore.onClickAddToCart(productId);
    expect(cartStore.cartProductList.length).toBe(1);
    expect(cartStore.cartProductList[0].quantity).toBe(2);
  });
  it("should test onRemoveCartItem", () => {
    const productId = 1;
    cartStore.onRemoveCartItem(productId);
    expect(cartStore.cartProductList.length).toBe(0);
  });
  it("should test ClearCart", () => {
    cartStore.clearCart();
    expect(cartStore.cartProductList.length).toBe(0);
  });
  it("should test getProductDetailsById", () => {
    const products = [
      {
        id: 12,
        title: "black t-shirt",
        quantity: 0,
        price: 372.46,
      },
      {
        id: 13,
        title: "suerfha t-shirt",
        price: 173.46,
      },
      {
        id: 14,
        title: "white t-shirt",
        price: 1444.46,
      },
    ];
    const selectedProduct = {
      productId: 13,
      title: "suerfha t-shirt",
      price: 173.46,
    };
    cartStore.productStore.setProductListResponse(products);
    expect(cartStore.getProductDetailsById(13)).toEqual(selectedProduct);
  });
  it("should test itemsQuantity", () => {
    const products = [
      {
        id: 10,
        title: "black t-shirt",
        price: 372.46,
      },
      {
        id: 12,
        title: "black t-shirt",
        price: 372.46,
      },
      {
        id: 14,
        title: "black t-shirt",
        price: 372.46,
      },
    ];
    cartStore.productStore.setProductListResponse(products);
    cartStore.onClickAddToCart(14);
    cartStore.onClickAddToCart(10);
    cartStore.onClickAddToCart(12);
    cartStore.onClickAddToCart(12);
    expect(cartStore.cartProductList.length).toBe(3);
    expect(cartStore.itemsQuantity).toBe(4);
  });
  it("should test totalCartAmount", () => {
    const products = [
      {
        id: 12,
        title: "black t-shirt",
        price: 372.46,
      },
      {
        id: 1,
        title: "blue t-shirt",
        price: 692.46,
      },
    ];
    cartStore.productStore.setProductListResponse(products);
    cartStore.onClickAddToCart(1);
    cartStore.onClickAddToCart(12);
    expect(cartStore.cartProductList.length).toBe(2);
    expect(cartStore.totalCartAmount).toBe(1064.92);
  });
});
