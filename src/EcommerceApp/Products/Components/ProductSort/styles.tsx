import styled from "@emotion/styled";
import tw from "tailwind.macro";
const ProductSortContainer = styled.div`
  ${tw`mr-2`};
`;
const SortByPrice = styled.div`
  ${tw``};
`;
const SortOptions = styled.select`
  ${tw`h-10 w-28 border-gray-500 rounded-lg border`};
`;
export { ProductSortContainer, SortByPrice, SortOptions };
