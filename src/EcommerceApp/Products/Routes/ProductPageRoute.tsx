import React from 'react'
import { observer, inject } from 'mobx-react'
import { ProductsPage } from '../Components/ProductsPage/index'
import { clearUserSession } from '../../Authentication/Utils/StorageUtils'
type Props = {
   productStore: any
   cartStore: any
   history: any
}

@inject('productStore', 'cartStore')
@observer
class ProductPageRoute extends React.Component<Props> {
   componentDidMount() {
      this.props.productStore.paginationStore.getProductList()
   }
   onClickSignOut = () => {
      const { history } = this.props
      clearUserSession()
      history.push('/SignIn')
   }
   doNetworkCalls = () => {
      const { productStore } = this.props
      productStore.paginationStore.getProductList()
   }
   render() {
      return (
         <ProductsPage
            productStore={this.props.productStore}
            cartStore={this.props.cartStore}
            onClickSignOut={this.onClickSignOut}
            doNetworkCalls={this.doNetworkCalls}
         />
      )
   }
}
export { ProductPageRoute }
