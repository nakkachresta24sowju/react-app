import AuthService from '../../E_CommerceStore/Authentication/services/AuthService/index'
import AuthStore from '../../E_CommerceStore/Authentication/stores/AuthStore/index'

import ProductService from '../../E_CommerceStore/Products/services/ProductService/index'
import ProductStore from '../../E_CommerceStore/Products/stores/ProductStore/index'

import CartStore from '../../E_CommerceStore/Cart/stores/CartStore/index'

import PaginationStore from '../stores/Pagination/index'

import Product from '../../EcommerceApp/Products/Stores/Models/index'
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
