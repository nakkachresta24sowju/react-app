import styled from "@emotion/styled";
import tw from "tailwind.macro";
const CartItemContainer = styled.div`
  ${tw`flex flex-row ml-2`};
  color: black;
`;
const ItemImage = styled.img`
  ${tw`w-12 h-20`}
`;
const ItemDetails = styled.div`
  ${tw`flex flex-col ml-2 w-48`};
`;
const PriceTaWithCloseItem = styled.div`
  ${tw`ml-2 right-0`};
`;
const PriceTag = styled.p`
  color: pink;
`;
const RemoveItem = styled.button`
  ${tw`text-white `}
  width: 10px;
  height: 10px;
`;

const LineBreak = styled.hr`
  size: 30px;
  padding: 5px;
  width: 330px;
`;
const PrintTextStyle = styled.p`
  ${tw`text-xs`};
`;

const PrintQuantity = styled.p`
  ${tw`text-xs`};
`;

export {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  PriceTaWithCloseItem,
  PriceTag,
  RemoveItem,
  LineBreak,
  PrintTextStyle,
  PrintQuantity,
};
