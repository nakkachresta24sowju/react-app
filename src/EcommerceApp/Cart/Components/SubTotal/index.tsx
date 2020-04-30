import React from "react";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import { SubTotalContainer, TextSubTotal, CountSubTotal } from "./styles";
type Props = {
  total: number;
};
@observer
class SubTotal extends React.Component<Props> {
  render() {
    const { total } = this.props;
    return (
      <SubTotalContainer>
        <TextSubTotal>SUBTOTAL</TextSubTotal>
        <CountSubTotal>{total}</CountSubTotal>
      </SubTotalContainer>
    );
  }
}
export default SubTotal;
