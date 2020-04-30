import styled from "@emotion/styled";
import tw from "tailwind.macro";
const CartItemContainer = styled.div`
  ${tw`flex flex-row `};
  border: 2px solid green;
  color: black;
`;
const ItemImage = styled.img`
  ${tw`w-10 h-20`}
`;
const ItemDetails = styled.div`
  ${tw`flex flex-col`};
`;
const PriceTaWithCloseItem = styled.div`
  border: 2px solid blue;
`;
const PriceTag = styled.p`
  color: pink;
`;
const RemoveItem = styled.button`
  width: 10px;
  height: 10px;
`;
export {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  PriceTaWithCloseItem,
  PriceTag,
  RemoveItem,
};
