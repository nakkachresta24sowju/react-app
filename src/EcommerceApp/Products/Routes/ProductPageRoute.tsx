import React from 'react'
import { observer, inject } from 'mobx-react'
import { ProductsPage } from '../Components/ProductsPage/index'
import { clearUserSession } from '../../Authentication/Utils/StorageUtils'
type Props = {
   productStore: any
   cartStore: any
   paginationStore: any
   history: any
}

@inject('productStore', 'cartStore', 'paginationStore')
@observer
class ProductPageRoute extends React.Component<Props> {
   // componentDidMount() {
   //    this.props.productStore.paginationStore.getProductList()
   // }
   componentDidMount() {
      let limit = this.props.paginationStore.limit
      let offSet = this.props.paginationStore.offSet
      this.doNetworkCalls(limit, offSet)
   }
   doNetworkCalls = (limit, offSet) => {
      const { getProductList } = this.props.paginationStore
      getProductList(limit, offSet)
   }
   onClickSignOut = () => {
      const { history } = this.props
      clearUserSession()
      history.push('/SignIn')
   }

   render() {
      return (
         <ProductsPage
            productStore={this.props.productStore}
            cartStore={this.props.cartStore}
            paginationStore={this.props.paginationStore}
            onClickSignOut={this.onClickSignOut}
            doNetworkCalls={this.doNetworkCalls}
         />
      )
   }
}
export default ProductPageRoute
