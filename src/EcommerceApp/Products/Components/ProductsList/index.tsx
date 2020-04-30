import React from "react";
import { observer } from "mobx-react";
import { ProductListContainer } from "./styles";
import Products from "../Products/index";

type Props = {
  sortedAndFilteredProducts: any;
  onClickAddToCart: any;
};

@observer
class ProductsList extends React.Component<Props> {
  render() {
    const { sortedAndFilteredProducts, onClickAddToCart } = this.props;
    return (
      <ProductListContainer>
        {sortedAndFilteredProducts.map((obj) => (
          <Products
            key={obj.productId}
            object={obj}
            onClickAddToCart={onClickAddToCart}
          />
        ))}
      </ProductListContainer>
    );
  }
}
export default ProductsList;
