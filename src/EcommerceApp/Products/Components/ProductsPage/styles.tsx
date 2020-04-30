import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ProductPageContainer = styled.div`
  ${tw`min-h-screen flex mr-16 ml-16`}
`;
const ProductsContainer = styled.div`
  ${tw`flex flex-col w-full h-full`}
`;
const SignOutBtn = styled.button`
  ${tw`rounded-md p-1 text-sm`}
  border:1px solid grey;
`;

const ContainerHeader = styled.div`
  ${tw`flex justify-between ml-16 mt-8`}
`;
const ParentContainer = styled.div``;
export {
  ProductPageContainer,
  ProductsContainer,
  SignOutBtn,
  ContainerHeader,
  ParentContainer,
};
