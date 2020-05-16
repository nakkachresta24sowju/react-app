import React from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { toast } from "react-toastify";
import { FiCheckCircle } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import {
  ProductsContainer,
  Image,
  Title,
  Price,
  AddCart,
  LineBar,
  CurrencyFormat,
  Cost,
  DecimalValue,
  Installment,
  NoOfInstallments,
  MonthlyInstallment,
} from "./styles";
type Props = {
  object: any;
  onClickAddToCart: any;
};

@observer
class Products extends React.Component<Props> {
  @action.bound
  onClickAddToCart(event) {
    toast.warn(
      <p className="text-center">
        <FiCheckCircle className="inline text-green-700" />
        Product added to your cart!
      </p>
    );
    this.props.onClickAddToCart(event.target.value);
  }
  render() {
    const { object } = this.props;
    return (
      <ProductsContainer>
        <Image src={object.imageURL} alt="shirts" />
        <Title>{object.title}</Title>
        <LineBar></LineBar>
        <Price>
          <CurrencyFormat>{object.currencyFormat}</CurrencyFormat>
          <Cost>{parseInt(object.price)}.</Cost>
          <DecimalValue>{object.price.toString().slice(-2)}</DecimalValue>
        </Price>
        <Installment>
          or
          <NoOfInstallments>{object.installmentsCount}</NoOfInstallments>x
          <CurrencyFormat>{object.currencyFormat}</CurrencyFormat>
          <MonthlyInstallment>
            {(object.price / object.installmentsCount).toString().slice(-2)}
          </MonthlyInstallment>
        </Installment>
        <AddCart value={object.productId} onClick={this.onClickAddToCart}>
          Add Cart
        </AddCart>
      </ProductsContainer>
    );
  }
}

export default Products;
