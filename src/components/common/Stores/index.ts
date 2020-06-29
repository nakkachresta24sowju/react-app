import AuthService from '../../../EcommerceApp/Authentication/Services/AuthService/index'
import AuthStore from '../../../EcommerceApp/Authentication/Stores/AuthStore/index'

import ProductService from '../../../EcommerceApp/Products/Services/ProductService/index'
import { ProductStore } from '../../../EcommerceApp/Products/Stores/ProductStore/index'

import { CartStore } from '../../../EcommerceApp/Cart/Stores/CartStore/index'

import PaginationStore from '../../../Common/stores/Pagination/index'

import Product from '../../../EcommerceApp/Products/Stores/Models/index'
const authService = new AuthService()
const authStore = new AuthStore(authService)

const productService = new ProductService()
const paginationStore = new PaginationStore(productService, Product)
const productStore = new ProductStore(productService, paginationStore)
const cartStore = new CartStore(productStore)
export default {
   authStore,
   productStore,
   cartStore,
   paginationStore
}
