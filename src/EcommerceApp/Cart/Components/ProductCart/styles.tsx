import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ProductCartContainer = styled.div`
  ${tw`top-0 right-0 z-0 fixed`};
  background-color: grey;
`;
const ContainerPart = styled.div`
  width: 500px;
  height: 100vh;
`;
const CartIcon = styled.div`
  ${tw`w-full`}
`;
const ListItems = styled.div`
  overflow: auto;
  border: 4px solid maroon;
  height: 500px;
`;
export { ProductCartContainer, ContainerPart, CartIcon, ListItems };
