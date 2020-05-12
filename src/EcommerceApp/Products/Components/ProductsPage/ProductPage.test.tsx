import React from "react";
import {
  render,
  getByText,
  getByPlaceholderText,
} from "@testing-library/react";
//import { Provider } from "mobx-react";
import { ProductsPage } from "../ProductsPage/index";
import ProductService from "../../Services/ProductService/index";
import { ProductStore } from "../../Stores/ProductStore/index";
import { CartStore } from "../../../Cart/Stores/CartStore/index";
import { ItemDetails } from "../../../Cart/Components/CartItem/styles";
describe("ProductPage Tests", () => {
  let productService;
  let productStore;
  let cartStore;

  beforeEach(() => {
    productService = new ProductService();
    productStore = new ProductStore(productService);
    cartStore = new CartStore(productStore);
  });

  it("should test SignOut button", () => {
    //console.log("hai");
    const { getByRole, debug } = render(
      <ProductsPage productStore={productStore} cartStore={cartStore} />
    );
    getByRole("button", { name: "Sign Out" });
    debug();
  });
  it("should test Header ", () => {
    const { getByRole, debug } = render(
      <ProductsPage productStore={productStore} cartStore={cartStore} />
    );
    getByRole("button", { name: "S" });
    getByRole("button", { name: "XS" });
    getByRole("button", { name: "L" });
    getByRole("button", { name: "M" });
    getByRole("button", { name: "XL" });
    getByRole("button", { name: "XXL" });
    debug();
  });
  it("should test header", () => {
    const { getByText } = render(
      <ProductsPage productStore={productStore} cartStore={cartStore} />
    );
    getByText(
      `${productStore.sortedAndFilteredProducts.length} Product(s) found.`
    );
    getByText("Sort price by:");
  });
  it("should test productcart", () => {
    const { getByTestId } = render(
      <ProductsPage productStore={productStore} cartStore={cartStore} />
    );
    //getByTestId("hide-cart-svg");
  });
});
