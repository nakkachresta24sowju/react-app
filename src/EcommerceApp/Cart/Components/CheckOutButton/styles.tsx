import styled from "@emotion/styled";
import tw from "tailwind.macro";
const CheckOutButtonContainer = styled.div`
  ${tw``};
  border: 1px solid red;
`;
const CheckOutBtn = styled.button`
  ${tw`text-center  h-10 m-5`};
  background-color: black;
  border: 2px solid red;
  width: 270px;
`;
export { CheckOutButtonContainer, CheckOutBtn };
