import React from "react";
import { observer } from "mobx-react";
import { SubTotalContainer, TextSubTotal, CountSubTotal } from "./styles";
type Props = {
  totalCost: number;
};
@observer
class SubTotal extends React.Component<Props> {
  render() {
    const { totalCost } = this.props;

    return (
      <SubTotalContainer>
        <TextSubTotal>SUBTOTAL</TextSubTotal>
        <CountSubTotal>₹ {totalCost.toFixed(2)}</CountSubTotal>
      </SubTotalContainer>
    );
  }
}
export default SubTotal;
