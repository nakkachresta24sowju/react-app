import React from "react";
import { observer } from "mobx-react";
import { CartListContainer } from "./styles";
import CartItem from "../CartItem/index";
import { action } from "mobx";
type Props = {
  productsInCart: any;
  onRemoveCartItem: Function;
  getProductDetailsById: Function;
};
@observer
class CartList extends React.Component<Props> {
  renderCartList = () => {
    const {
      productsInCart,
      onRemoveCartItem,
      getProductDetailsById,
    } = this.props;

    return productsInCart.map((eachProduct) => (
      <CartItem
        cartItem={eachProduct}
        onRemoveCartItem={onRemoveCartItem}
        getProductDetailsById={getProductDetailsById}
      />
    ));
  };

  render() {
    console.log("cartList");
    return <CartListContainer>{this.renderCartList()}</CartListContainer>;
  }
}
export default CartList;
