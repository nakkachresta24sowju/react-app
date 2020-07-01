import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import { setAccessToken } from '../../../utils/StorageUtils'
import Product from '../../../EcommerceApp/Products/Stores/Models/index'

class PaginationStore {
   @observable limit: number
   @observable offSet: number
   //    @observable totalProducts: number
   @observable currentPage: number
   @observable getProductListAPIStatus
   @observable sizeFilter: any
   @observable getProductListAPIError
   productsAPIService: any
   @observable productList: any
   @observable sortBy: string = 'SELECT'
   //sizes: any

   constructor(productsAPIService, Product) {
      this.productList = []
      this.sizeFilter = []
      //this.sizes = []
      this.productsAPIService = productsAPIService
      this.limit = 4
      this.offSet = 0
      this.currentPage = 0
      this.init()
   }
   @action.bound
   init() {
      this.getProductListAPIStatus = API_INITIAL
      this.getProductListAPIError = null
      this.offSet = 0
   }
   @action.bound
   getProductList(limit, offSet) {
      const productsPromise = this.productsAPIService.getProductsAPI(
         limit,
         offSet
      )
      return bindPromiseWithOnSuccess(productsPromise)
         .to(this.setGetProductListAPIStatus, this.setProductListResponse)
         .catch(this.setGetProductListAPIError)
   }

   @action.bound
   setProductListResponse(productsAPIService) {
      this.productList = productsAPIService.products.map(obj => {
         return new Product(obj)
      })
      // console.log(this.productList, 87878)
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
   onSelectSize(selectedSize) {
      let index = this.sizeFilter.indexOf(selectedSize)
      if (index === -1) {
         this.sizeFilter.push(selectedSize)
      } else {
         this.sizeFilter.splice(index, 1)
      }
   }

   @action.bound
   updateCurrentPage(currentpage) {
      this.currentPage = currentpage.selected
      this.offSet = currentpage.selected * this.limit
      this.getProductList(this.limit, this.offSet)
   }

   @action.bound
   onSelectSortBy(value) {
      this.sortBy = value
   }

   @computed get products() {
      let productListItems = this.productList
      console.log(this.productList, 'paginationStore')
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
         console.log(productListItems, 'paginationStore ASC')
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
}

export default PaginationStore
