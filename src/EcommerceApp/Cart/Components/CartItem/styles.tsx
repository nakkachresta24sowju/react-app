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
  ${tw`flex flex-col ml-2 w-48 text`};
`;
const PriceTaWithCloseItem = styled.div`
  ${tw`ml-2 right-0 `};
`;
const PriceTag = styled.p`
  ${tw`text-orange-400 `};
`;
const RemoveItem = styled.button`
  ${tw`text-black  ml-12`}
  width: 10px;
  height: 10px;
`;

const LineBreak = styled.hr`
  size: 30px;
  padding: 5px;
  width: 330px;
`;
const PrintTextStyle = styled.p`
  ${tw`text-xs text-gray-500`};
`;

const PrintQuantity = styled.p`
  ${tw`text-xs text-gray-500`};
`;
const ProductTitle = styled.p`
  ${tw`text-m text-white`};
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
  ProductTitle,
};
