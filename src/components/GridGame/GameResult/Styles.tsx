import styled from "@emotion/styled";
import tw from "tailwind.macro";

const PlayAgain = styled.button`
  ${tw`mt-8 text-white w-auto h-14 text-2xl`};
  background-color: #6666ff;
  border-radius: 4px;
  padding: 10px;
`;
const CongratulationsText = styled.p`
  color: green;
  font-size: 25px;
`;
const Result = styled.div`
  ${tw`p-32 flex flex-col flex-wrap justify-center items-center`};
`;
const TopLevel = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;
export { PlayAgain, CongratulationsText, Result, TopLevel };

//background-color:${(p: ButtonCss) => (p.typeOfClickedButton === "wrong") ? "red" : "#2a4363"};
