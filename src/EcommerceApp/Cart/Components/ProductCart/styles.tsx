import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ProductCartContainer = styled.div`
  ${tw`top-0 right-0 z-10 fixed bg-gray-800 `};
`;
const ContainerPart = styled.div`
  ${tw``}
  height: 100vh;
  width: 340px;
`;
const CartIcon = styled.div`
  ${tw`w-full h-16 w-16 p-2`}
`;
const ListItems = styled.div`
  overflow: auto;
  height: 390px;
`;
const CartIconWithNoOfItems = styled.div`
  ${tw`h-10 m-4 flex justify-center`}
`;
const CartText = styled.span`
  ${tw` text-xl text-white `}
`;
const ProductsCount = styled.div`
  ${tw`mr-5 -ml-5 mt-2 text-xs text-yellow-600`}
`;
const ProductsCountInCart = styled.div`
  ${tw`mr-6 -mt-8  ml-5 text-xs text-yellow-600`}
`;
const AddItemsText = styled.p`
  ${tw`text-white flex  justify-center `}
`;
const ButtonHideCart = styled.button`
  ${tw`text-white text-lg active:outline-none focus:outline-none leading-none`}
`;
const CloseButtonContainer = styled.div`
  ${tw`flex relative bg-gray-800 pl-2 h-8`}
  left:-20px;
`;

export {
  ProductCartContainer,
  ContainerPart,
  CartIcon,
  ListItems,
  CartIconWithNoOfItems,
  CartText,
  ProductsCount,
  ProductsCountInCart,
  AddItemsText,
  ButtonHideCart,
  CloseButtonContainer,
};
