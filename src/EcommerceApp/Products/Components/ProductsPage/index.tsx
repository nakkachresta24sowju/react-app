import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import { observer } from 'mobx-react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
//import { observable } from 'mobx'
import {
   ProductPageContainer,
   ProductsContainer,
   SignOutBtn,
   ContainerHeader,
   ParentContainer
} from './styles'
import Header from '../Header/index'
import SizeFilter from '../SizeFilter/index'
import ProductsList from '../ProductsList/index'
import ProductCart from '../../../Cart/Components/ProductCart/index'
import LoadingWrapperWithFailure from '../../../../components/common/LoadingWrapperWithFailure/index'
import { observable } from 'mobx'
import Pagination from '../../../../Common/components/Pagination/index'
type Props = {
   productStore: any
   cartStore: any
   paginationStore: any
   onClickSignOut: any
   doNetworkCalls: any
}

@observer
class ProductsPage extends React.Component<Props> {
   //@observable paginationNumber: number = 0;

   static defaultProps = {
      productStore: {},
      cartStore: {},
      onClickSignOut: () => {},
      doNetworkCalls: {}
   }
   renderProductList = observer(() => {
      const {
         sortedAndFilteredProducts
      } = this.props.productStore.paginationStore
      const { onClickAddToCart } = this.props.cartStore
      return (
         <ProductsList
            onClickAddToCart={onClickAddToCart}
            sortedAndFilteredProducts={sortedAndFilteredProducts}
         />
      )
   })

   render() {
      const {
         onSelectSortBy,
         onSelectSize,
         sizeFilter,
         totalNoOfProductsDisplayed,
         getProductListAPIStatus,
         getProductListAPIError
      } = this.props.productStore.paginationStore

      const { onClickSignOut, doNetworkCalls } = this.props

      return (
         <ParentContainer>
            <ContainerHeader>
               <SignOutBtn type='submit' onClick={onClickSignOut}>
                  Sign Out
               </SignOutBtn>
               <ProductCart cartStore={this.props.cartStore} />
            </ContainerHeader>

            <ProductPageContainer>
               <div>
                  <SizeFilter
                     sizeFilter={sizeFilter}
                     onSelectSize={onSelectSize}
                  />
                  <Pagination productStore={this.props.productStore} />
               </div>
               <ProductsContainer>
                  <Header
                     productCount={totalNoOfProductsDisplayed}
                     onSelectSortBy={onSelectSortBy}
                  />

                  <LoadingWrapperWithFailure
                     apiError={getProductListAPIError}
                     apiStatus={getProductListAPIStatus}
                     onRetryClick={doNetworkCalls}
                     renderSuccessUI={this.renderProductList}
                  />
               </ProductsContainer>
            </ProductPageContainer>

            <ToastContainer
               hideProgressBar={true}
               autoClose={3000}
               closeButton={false}
               transition={Slide}
               position='bottom-center'
            />

            {/* <PaginationArrow onClick={onOffsetDecrease}>
                  <AiOutlineLeft />
               </PaginationArrow>
               <PageNumber>{offSet / limit + 1}</PageNumber>
               <p>/{Math.ceil(total / limit)}</p>
               <PaginationArrow onClick={onOffsetIncrease}>
                  <AiOutlineRight />
               </PaginationArrow> */}
         </ParentContainer>
      )
   }
}
export { ProductsPage }
