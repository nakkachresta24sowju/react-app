import styled from "@emotion/styled";
import tw from "tailwind.macro";

type Props = {
  space: number;
  width: number;
  rows: number;
  background: string;
};

const EachGrid = styled.button`
  width: ${(p: Props) => p.width / p.rows - p.space}px;
  height: ${(p: Props) => p.width / p.rows - p.space}px;
  background-color: ${(p: Props) =>
    p.background === "light-theme" ? "#42a671" : "#4ecbc0"};
  ${tw` mr-2 mb-1`};
`;

export { EachGrid };
