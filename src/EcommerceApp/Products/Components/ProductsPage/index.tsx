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
import { withRouter } from "react-router-dom";
import Header from "../Header/index";
import SizeFilter from "../SizeFilter/index";
import ProductsList from "../ProductsList/index";
import ProductCart from "../../../Cart/Components/ProductCart/index";
import { clearUserSession } from "../../../Authentication/Utils/StorageUtils";
import LoadingWrapperWithFailure from "../../../../components/common/LoadingWrapperWithFailure/index";
import NoDataView from "../../../../components/common/NoDataView/index";
type Props = {
  productStore: any;
  cartStore: any;
  authStore: any;
  history: any;
};

@inject("productStore", "cartStore")
@observer
class ProductsPage extends React.Component<Props> {
  componentDidMount() {
    this.props.productStore.getProductList();
  }

  @action.bound
  onClickSignOut() {
    const { history } = this.props;
    clearUserSession();
    history.push("/SignIn");
  }
  doNetworkCalls = () => {
    const { productStore } = this.props;
    productStore.getProductList();
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
    const {
      onSelectSortBy,
      onSelectSize,
      sizeFilter,
      totalNoOfProductsDisplayed,
      getProductListAPIStatus,
      getProductListAPIError,
    } = this.props.productStore;

    return (
      <ParentContainer>
        <ContainerHeader>
          <SignOutBtn type="submit" onClick={this.onClickSignOut}>
            SignOut
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
              onRetryClick={this.doNetworkCalls}
              renderSuccessUI={this.renderProductList}
            />
          </ProductsContainer>
        </ProductPageContainer>
      </ParentContainer>
    );
  }
}
export default withRouter(ProductsPage);
