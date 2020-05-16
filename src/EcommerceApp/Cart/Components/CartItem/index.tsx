import React from "react";
import { observer } from "mobx-react";
import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  PriceTaWithCloseItem,
  PriceTag,
  RemoveItem,
  LineBreak,
  PrintQuantity,
  PrintTextStyle,
  ProductTitle,
} from "./styles";

type Props = {
  cartItem: any;
  onRemoveCartItem: Function;
  getProductDetailsById: Function;
};
@observer
class CartItem extends React.Component<Props> {
  onRemoveCartItem = (event) => {
    console.log(event.target.value);
    this.props.onRemoveCartItem(event.target.value);
  };

  render() {
    const { cartItem } = this.props;
    const { getProductDetailsById } = this.props;
    const productDetails = getProductDetailsById(cartItem.productId);
    return (
      <div>
        <LineBreak />
        <CartItemContainer>
          <ItemImage src={productDetails.imageURL} alt="products" />
          <ItemDetails>
            <ProductTitle>{productDetails.title}</ProductTitle>
            <PrintTextStyle>{productDetails.printStyle}</PrintTextStyle>
            <PrintQuantity>Quantity:{cartItem.quantity}</PrintQuantity>
          </ItemDetails>
          <PriceTaWithCloseItem>
            <RemoveItem
              value={cartItem.cartItemId}
              onClick={this.onRemoveCartItem}
            >
              x
            </RemoveItem>

            <PriceTag>₹ {productDetails.price}</PriceTag>
          </PriceTaWithCloseItem>
        </CartItemContainer>
      </div>
    );
  }
}
export { CartItem };
