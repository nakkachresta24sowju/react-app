import React from "react";
import { observer } from "mobx-react";
import { CheckOutBtn, CheckOutButtonContainer } from "./styles";
type Props = {
  clearCart: Function;
};
@observer
class CheckOutButton extends React.Component<Props> {
  clearCart = () => {
    const { clearCart } = this.props;
    clearCart();
  };
  render() {
    return (
      <CheckOutButtonContainer>
        <CheckOutBtn onClick={this.clearCart}>CHECKOUT</CheckOutBtn>
      </CheckOutButtonContainer>
    );
  }
}
export { CheckOutButton };
