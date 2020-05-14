import React from "react";
import { observer } from "mobx-react";
import { ProductSortContainer, SortByPrice, SortOptions } from "./styles";
type Props = {
  onSelectSortBy: Function;
};

@observer
class ProductsSort extends React.Component<Props> {
  onSelectSortBy = (event) => {
    const value = event.target.value;
    this.props.onSelectSortBy(value);
  };

  render() {
    return (
      <ProductSortContainer>
        <SortByPrice>
          Sort price by:
          <SortOptions onChange={this.onSelectSortBy}>
            <option value="SELECT" key="SELECT" defaultValue={"SELECT"} hidden>
              Select
            </option>
            <option value="DESCENDING" key="hightest to Lowest">
              Lowest to highest
            </option>
            <option value="ASCENDING" key="Lowest to highest">
              Highest to lowest
            </option>
          </SortOptions>
        </SortByPrice>
      </ProductSortContainer>
    );
  }
}
export default ProductsSort;
