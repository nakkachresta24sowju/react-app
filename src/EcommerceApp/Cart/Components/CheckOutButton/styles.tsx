import styled from "@emotion/styled";
import tw from "tailwind.macro";
const CheckOutButtonContainer = styled.div`
  ${tw`flex justify-center`};
`;
const CheckOutBtn = styled.button`
  ${tw`text-center text-white p-2 m-4 h-10`};
  background-color: black;
  width: 270px;
`;
export { CheckOutButtonContainer, CheckOutBtn };
