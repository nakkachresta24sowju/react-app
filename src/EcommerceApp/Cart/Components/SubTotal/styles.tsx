import styled from "@emotion/styled";
import tw from "tailwind.macro";
const SubTotalContainer = styled.div`
  ${tw`flex justify-between mt-4 ml-4 mr-4`};
`;
const TextSubTotal = styled.div`
  ${tw`text-gray-500`};
`;
const CountSubTotal = styled.div`
  ${tw`text-orange-400 `};
`;
export { SubTotalContainer, CountSubTotal, TextSubTotal };
