import AuthService from "../../E_CommerceStore/Authentication/services/AuthService/index.api";
import AuthStore from "../../E_CommerceStore/Authentication/stores/AuthStore/index";

import ProductService from "../../E_CommerceStore/Products/services/ProductService/index.api";
import ProductStore from "../../E_CommerceStore/Products/stores/ProductStore/index";

import CartStore from "../../E_CommerceStore/Cart/stores/CartStore/index";

const authService = new AuthService();
const authStore = new AuthStore(authService);

const productService = new ProductService();
const productStore = new ProductStore(productService);

const cartStore = new CartStore(productStore);

export default {
      authStore,
      productStore,
      cartStore,
};
