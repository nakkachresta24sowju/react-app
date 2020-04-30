import styled from "@emotion/styled";
import tw from "tailwind.macro";
type Props = {
  isClicked: boolean;
};
const SizeFilterContainer = styled.div`
  ${tw`w-1/4 min-h-screen p-5`};
`;

const SizeText = styled.p`
  ${tw`text-black-500 `};
`;
const Btn = styled.button`
  ${tw`rounded-full p-2 m-1 bg-gray-200 h-10 w-10 hover:border-gray-600 border focus:outline-none`};
  background-color: ${(p: Props) =>
    p.isClicked === false ? "black" : "white"};
  color: ${(p: Props) => (p.isClicked === false ? "white" : "black")};
`;

const SizeBtn = styled.div`
  ${tw`flex justify-between flex-wrap p-5`};
`;
export { SizeFilterContainer, SizeText, SizeBtn, Btn };
