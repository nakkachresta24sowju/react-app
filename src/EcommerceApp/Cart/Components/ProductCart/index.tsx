import React from "react";
import { observable } from "mobx";
import {
  ProductCartContainer,
  ContainerPart,
  CartIcon,
  ListItems,
  CartIconWithNoOfItems,
  CartText,
  ProductsCount,
  ProductsCountInCart,
  AddItemsText,
  ButtonHideCart,
  CloseButtonContainer,
} from "./styles";
import { CheckOutButton } from "../CheckOutButton";
import { CartList } from "../CartList/index";
import SubTotal from "../SubTotal/index";
import { observer, inject } from "mobx-react";
type Props = {
  cartStore: any;
};

@inject("cartStore")
@observer
class ProductCart extends React.Component<Props> {
  @observable shouldDisplayCart: boolean = false;

  showCart = () => {
    const {
      cartProductList,
      onRemoveCartItem,
      getProductDetailsById,
      noOfProductsInCart,
      clearCart,
      totalCartAmount,
      itemsQuantity,
    } = this.props.cartStore;

    return (
      <ProductCartContainer>
        <CloseButtonContainer>
          <ButtonHideCart onClick={this.onClickCart}>x</ButtonHideCart>
        </CloseButtonContainer>
        <ContainerPart>
          <CartIconWithNoOfItems>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-testid="hide-cart-svg"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <ProductsCount>{itemsQuantity}</ProductsCount>
            <CartText>Cart</CartText>
          </CartIconWithNoOfItems>

          <ListItems>
            {noOfProductsInCart === 0 ? (
              <AddItemsText>Add some more products in the cart</AddItemsText>
            ) : (
              <CartList
                productsInCart={cartProductList}
                onRemoveCartItem={onRemoveCartItem}
                getProductDetailsById={getProductDetailsById}
              />
            )}
          </ListItems>

          <SubTotal totalCost={totalCartAmount} />
          <CheckOutButton clearCart={clearCart} />
        </ContainerPart>
      </ProductCartContainer>
    );
  };

  hideCart = () => {
    const { itemsQuantity } = this.props.cartStore;
    return (
      <CartIcon onClick={this.onClickCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid="show-cart-svg"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <ProductsCountInCart>{itemsQuantity}</ProductsCountInCart>
      </CartIcon>
    );
  };

  onClickCart = () => {
    if (this.shouldDisplayCart) {
      this.shouldDisplayCart = false;
      this.hideCart();
    } else {
      this.shouldDisplayCart = true;
      this.showCart();
    }
  };

  render() {
    if (!this.shouldDisplayCart) {
      return <ProductCartContainer>{this.hideCart()}</ProductCartContainer>;
    } else {
      return <ProductCartContainer>{this.showCart()}</ProductCartContainer>;
    }
  }
}
export default ProductCart;
