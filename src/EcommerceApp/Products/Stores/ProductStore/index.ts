import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import { setAccessToken } from '../../../../utils/StorageUtils'
import Product from '../Models/index'

class ProductStore {
   @observable getProductListAPIStatus
   @observable sizeFilter: any
   @observable getProductListAPIError
   @observable sortBy: string = 'SELECT'
   productsAPIService: any
   @observable productList: any
   @observable limit: number = 3
   @observable offSet: number = 0
   @observable total: number = 16
   sizes: any

   constructor(productsAPIService) {
      this.productList = []
      this.sizeFilter = []
      this.sizes = []
      this.productsAPIService = productsAPIService
      this.init()
   }

   @action.bound
   init() {
      this.getProductListAPIStatus = API_INITIAL
      this.getProductListAPIError = null
   }

   @action.bound
   getProductList() {
      const authPromise = this.productsAPIService.getProductsAPI(
         this.limit,
         this.offSet
      )
      return bindPromiseWithOnSuccess(authPromise)
         .to(this.setGetProductListAPIStatus, this.setProductListResponse)
         .catch(this.setGetProductListAPIError)
   }

   @action.bound
   setProductListResponse(productsAPIService) {
      setAccessToken(productsAPIService)
      this.productList = productsAPIService.products.map(obj => {
         return new Product(obj)
      })
      this.getProductList()
   }

   @action.bound
   setGetProductListAPIError(error) {
      this.getProductListAPIError = error
   }

   @action.bound
   setGetProductListAPIStatus(apiStatus) {
      this.getProductListAPIStatus = apiStatus
   }

   @action.bound
   onSelectSortBy(value) {
      this.sortBy = value
   }
   @action.bound
   onSelectSize(selectedSize) {
      let index = this.sizeFilter.indexOf(selectedSize)
      if (index === -1) {
         this.sizeFilter.push(selectedSize)
      } else {
         this.sizeFilter.splice(index, 1)
      }
   }

   @action.bound onOffsetIncrease() {
      this.offSet += this.limit
      return this.offSet
   }
   @action.bound onOffsetDecrease() {
      this.offSet -= this.limit
      return this.offSet
   }
   @computed get products() {
      let productListItems = this.productList
      let productsitems: Array<object> = []
      this.sizeFilter.forEach(e => {
         this.productList.map(obj => {
            if (obj.availableSizes.includes(e)) {
               productsitems.push(obj)
            }
         })
      })
      if (productsitems.length > 0) {
         productListItems = productsitems
      }
      if (this.sortBy === 'ASCENDING') {
         productListItems = productListItems.sort((a, b) => a.price - b.price)
      } else if (this.sortBy === 'DESCENDING') {
         productListItems = productListItems.sort((a, b) => b.price - a.price)
      }
      productListItems = productListItems.filter(
         (item, i, ar) => productListItems.indexOf(item) === i
      )
      return productListItems
   }

   @computed get sortedAndFilteredProducts() {
      return this.products
   }

   @computed
   get totalNoOfProductsDisplayed() {
      return this.products.length
   }
}
export { ProductStore }
