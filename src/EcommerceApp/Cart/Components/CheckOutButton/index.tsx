import React from "react";
import { observer } from "mobx-react";
import { reaction, action } from "mobx";
import { CheckOutBtn, CheckOutButtonContainer } from "./styles";
type Props = {
  total: number;
  clearCart: Function;
};
@observer
class CheckOutButton extends React.Component<Props> {
  @action.bound
  clearCart() {
    const { clearCart } = this.props;
    clearCart();
  }
  render() {
    return (
      <CheckOutButtonContainer>
        <CheckOutBtn onClick={this.clearCart}>CHECKOUT</CheckOutBtn>
      </CheckOutButtonContainer>
    );
  }
}
export default CheckOutButton;
