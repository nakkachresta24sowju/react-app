import React from "react";
import { observable, action } from "mobx";
import {
  ProductCartContainer,
  ContainerPart,
  CartIcon,
  ListItems,
} from "./styles";
import CheckOutButton from "../CheckOutButton";
import CartList from "../CartList/index";
import SubTotal from "../SubTotal/index";
import { observer, inject } from "mobx-react";
type Props = {
  cartStore: any;
};

@inject("cartStore")
@observer
class ProductCart extends React.Component<Props> {
  @observable shouldDisplayCart: boolean = false;
  constructor(props) {
    super(props);
    console.log("cartstore in product cart", this.props.cartStore);
  }

  showCart = () => {
    const {
      cartProductList,
      onRemoveCartItem,
      getProductDetailsById,
      noOfProductsInCart,
      clearCart,
    } = this.props.cartStore;
    return (
      <div>
        <ContainerPart>
          <div>
            <button onClick={this.onClickCart}>X</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <ListItems>
            <CartList
              productsInCart={cartProductList}
              onRemoveCartItem={onRemoveCartItem}
              getProductDetailsById={getProductDetailsById}
            />
          </ListItems>
          <SubTotal total={noOfProductsInCart} />
          <CheckOutButton total={noOfProductsInCart} clearCart={clearCart} />
        </ContainerPart>
      </div>
    );
  };

  hideCart = () => {
    const { noOfProductsInCart } = this.props.cartStore;
    return (
      <CartIcon onClick={this.onClickCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <div className="-mt-8 ml-5 text-xs">{noOfProductsInCart}</div>
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
