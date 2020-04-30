import styled from "@emotion/styled";
import tw from "tailwind.macro";
const SubTotalContainer = styled.div`
  ${tw`flex justify-between`};
`;
const TextSubTotal = styled.div`
  color: #d3d3d3;
`;
const CountSubTotal = styled.div`
  color: yellow;
`;
export { SubTotalContainer, CountSubTotal, TextSubTotal };
