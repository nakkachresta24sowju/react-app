import React from "react";
import { observer, inject } from "mobx-react";

import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  PriceTaWithCloseItem,
  PriceTag,
  RemoveItem,
} from "./styles";
import { action } from "mobx";
type Props = {
  cartItem: any;
  onRemoveCartItem: Function;
  getProductDetailsById: Function;
};

@observer
class CartItem extends React.Component<Props> {
  @action.bound
  onRemoveCartItem(event) {
    console.log(event.target.value);
    this.props.onRemoveCartItem(event.target.value);
  }

  render() {
    const { cartItem } = this.props;
    const { getProductDetailsById } = this.props;
    const productDetails = getProductDetailsById(cartItem.productId);
    return (
      <CartItemContainer>
        <ItemImage src={productDetails.imageURL} alt="products" />
        <ItemDetails>
          <p>{productDetails.title}</p>
          <p>{productDetails.printStyle}</p>
          <p>Quantity:{0}</p>
        </ItemDetails>
        <RemoveItem value={cartItem.cartItemId} onClick={this.onRemoveCartItem}>
          x
        </RemoveItem>
        <PriceTaWithCloseItem>
          <PriceTag>{productDetails.price}</PriceTag>
        </PriceTaWithCloseItem>
      </CartItemContainer>
    );
  }
}
export default CartItem;
