import styled from "@emotion/styled";
import tw from "tailwind.macro";
type Props = {
  background: string;
  space: number;
  width: number;
};

const GameFieldContainer = styled.div`
    width: ${(p: Props) => p.width}px;
    height: ${(p: Props) => p.width}px;
    ${tw`m-5 flex flex-col flex-wrap justify-between`}
    background-color:${(p: Props) =>
      p.background === "light-theme" ? "#fff" : "#1a202c"};
    color:${(p: Props) =>
      p.background === "light-theme" ? "black" : "White"}`;

export { GameFieldContainer };
