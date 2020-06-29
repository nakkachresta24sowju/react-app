import { observable, action, computed } from 'mobx'
import PaginationStore from '../../../../Common/stores/index'
class ProductStore {
   productsAPIService: any
   paginationStore: any

   constructor(productsAPIService, paginationStore) {
      this.productsAPIService = productsAPIService
      this.paginationStore = paginationStore
   }

   @action.bound
   onSelectSortBy(value) {
      this.paginationStore.sortBy = value
   }

   @computed
   get totalNoOfProductsDisplayed() {
      return this.paginationStore.products.length
   }
}
export { ProductStore }
