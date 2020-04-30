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
            <button>Cart</button>
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
  @action.bound
  hideCart() {
    return <CartIcon onClick={this.onClickCart}>Cart</CartIcon>;
  }
  @action.bound
  onClickCart() {
    if (this.shouldDisplayCart) {
      this.shouldDisplayCart = false;
      this.hideCart();
    } else {
      this.shouldDisplayCart = true;
      this.showCart();
    }
  }

  render() {
    if (!this.shouldDisplayCart) {
      return <ProductCartContainer>{this.hideCart()}</ProductCartContainer>;
    } else {
      return <ProductCartContainer>{this.showCart()}</ProductCartContainer>;
    }
  }
}
export default ProductCart;
