import AuthService from "../../../EcommerceApp/Authentication/Services/AuthService/index";
import AuthStore from "../../../EcommerceApp/Authentication/Stores/AuthStore/index";
import ProductService from "../../../EcommerceApp/Products/Services/ProductService/index";
import ProductStore from "../../../EcommerceApp/Products/Stores/ProductStore/index";
import CartStore from "../../../EcommerceApp/Cart/Stores/CartStore/index";
const authStore = new AuthStore(new AuthService());
const productStore = new ProductStore(new ProductService());
const cartStore = new CartStore(productStore);

export default {
  authStore,
  productStore,
  cartStore,
};
