import React from "react";
import { reaction } from "mobx";
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
        <CountSubTotal>₹ {totalCost}</CountSubTotal>
      </SubTotalContainer>
    );
  }
}
export default SubTotal;
