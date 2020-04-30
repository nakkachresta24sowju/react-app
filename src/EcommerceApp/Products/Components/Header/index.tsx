import React from "react";
import { observer } from "mobx-react";
import { HeaderContainer, ProductsFound } from "./styles";
import ProductSort from "../ProductSort/index";

type Props = {
  productCount: any;
  onSelectSortBy: Function;
};

@observer
class ProductsPage extends React.Component<Props> {
  render() {
    const { productCount, onSelectSortBy } = this.props;
    return (
      <HeaderContainer>
        <ProductsFound>{productCount} Product(s) found.</ProductsFound>
        <ProductSort onSelectSortBy={onSelectSortBy} />
      </HeaderContainer>
    );
  }
}
export default ProductsPage;
