import React from "react";
import { action } from "mobx";
import { observer, inject } from "mobx-react";
import {
  ProductPageContainer,
  ProductsContainer,
  SignOutBtn,
  ContainerHeader,
  ParentContainer,
} from "./styles";
import Header from "../Header/index";
import SizeFilter from "../SizeFilter/index";
import ProductsList from "../ProductsList/index";
import ProductCart from "../../../Cart/Components/ProductCart/index";
import LoadingWrapperWithFailure from "../../../../components/common/LoadingWrapperWithFailure/index";

type Props = {
  productStore: any;
  cartStore: any;
  onClickSignOut: any;
  doNetworkCalls: any;
};

@observer
class ProductsPage extends React.Component<Props> {
  static defaultProps = {
    productStore: {},
    cartStore: {},
    onClickSignOut: () => {},
    doNetworkCalls: {},
  };
  renderProductList = observer(() => {
    const { sortedAndFilteredProducts } = this.props.productStore;
    const { onClickAddToCart } = this.props.cartStore;
    return (
      <ProductsList
        onClickAddToCart={onClickAddToCart}
        sortedAndFilteredProducts={sortedAndFilteredProducts}
      />
    );
  });

  render() {
    console.log(this.props.productStore, 555555);
    console.log(this.props.cartStore, 44444);
    const {
      onSelectSortBy,
      onSelectSize,
      sizeFilter,
      totalNoOfProductsDisplayed,
      getProductListAPIStatus,
      getProductListAPIError,
    } = this.props.productStore;
    const { onClickSignOut, doNetworkCalls } = this.props;
    //console.log(sizeFilter, 4444444444);
    return (
      <ParentContainer>
        <ContainerHeader>
          <SignOutBtn type="submit" onClick={onClickSignOut}>
            Sign Out
          </SignOutBtn>
          <ProductCart cartStore={this.props.cartStore} />
        </ContainerHeader>

        <ProductPageContainer>
          <SizeFilter sizeFilter={sizeFilter} onSelectSize={onSelectSize} />
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
      </ParentContainer>
    );
  }
}
export { ProductsPage };
