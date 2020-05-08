import styled from "@emotion/styled";
import tw from "tailwind.macro";
const SubTotalContainer = styled.div`
  ${tw`flex justify-between mt-4`};
`;
const TextSubTotal = styled.div`
  color: #f8f8ff;
`;
const CountSubTotal = styled.div`
  color: yellow;
`;
export { SubTotalContainer, CountSubTotal, TextSubTotal };
