import React from "react";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import { SizeFilterContainer, SizeText, SizeBtn, Btn } from "./styles";
//import { withRouter } from "react-router-dom";
type Props = {
  onSelectSize: Function;
  sizeFilter: any;
};
inject("productStore");
@observer
class SizeFilter extends React.Component<Props> {
  onSelectSize = (event) => {
    console.log(event.target.value, 7777);
    this.props.onSelectSize(event.target.value);
  };

  render() {
    let { sizeFilter } = this.props;
    //console.log(toJS(sizeFilter).indexOf("M"), 9999999999);
    return (
      <SizeFilterContainer>
        <SizeText>Sizes:</SizeText>
        <SizeBtn>
          <Btn
            value="S"
            onClick={this.onSelectSize}
            isClicked={sizeFilter.indexOf("S") === -1}
          >
            S
          </Btn>
          <Btn
            value="XS"
            onClick={this.onSelectSize}
            isClicked={sizeFilter.indexOf("XS") === -1}
          >
            XS
          </Btn>
          <Btn
            value="M"
            onClick={this.onSelectSize}
            isClicked={sizeFilter.indexOf("M") === -1}
          >
            M
          </Btn>
          <Btn
            value="L"
            onClick={this.onSelectSize}
            isClicked={sizeFilter.indexOf("L") === -1}
          >
            L
          </Btn>
          <Btn
            value="XL"
            onClick={this.onSelectSize}
            isClicked={sizeFilter.indexOf("XL") === -1}
          >
            XL
          </Btn>
          <Btn
            value="XXL"
            onClick={this.onSelectSize}
            isClicked={sizeFilter.indexOf("XXL") === -1}
          >
            XXL
          </Btn>
        </SizeBtn>
      </SizeFilterContainer>
    );
  }
}
export default SizeFilter;
