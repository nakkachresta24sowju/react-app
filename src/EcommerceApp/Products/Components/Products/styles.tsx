import styled from "@emotion/styled";
import tw from "tailwind.macro";
const ProductsContainer = styled.div`
  ${tw`m-4 flex flex-col justify-center items-center hover:border-grey-600 border`};
  width: 240px;
`;
const Image = styled.img`
  ${tw`w-40 `};
`;
const LineBar = styled.div`
  ${tw`w-4 mt-2 mb-2 rounded border-yellow-600 border `};
`;
const Title = styled.div`
  ${tw`text-center`};
`;
const Price = styled.div`
  ${tw`text-center`};
`;
const AddCart = styled.button`
  ${tw`text-center w-48 h-10 text-white bg-black rounded-sm`};
`;
const CurrencyFormat = styled.span`
  ${tw`text-xs p-1`};
`;
const Cost = styled.span`
  ${tw`text-lg`};
`;
const DecimalValue = styled.span`
  ${tw`text-xs`};
`;
const Installment = styled.div`
  ${tw`text-xs`};
`;
const NoOfInstallments = styled.span`
  ${tw`text-xs`};
`;
const MonthlyInstallment = styled.span`
  ${tw`text-xs`};
`;

export {
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
};
