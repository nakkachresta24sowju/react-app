import styled from '@emotion/styled';
import tw from "tailwind.macro";
type PropsCss = {
  background: string
  space: number
  width: number
}
type ButtonCss = {
  space: number
  width: number
  rows: number
  background: string

}
const DivTag = styled.div`
    width: ${(p: PropsCss) => p.width}px;
    height: ${(p: PropsCss) => p.width}px;
    ${tw`m-5 flex flex-col flex-wrap justify-between`}
    background-color:${(p: PropsCss) => (p.background === "light-theme") ? "#fff" : "#1a202c"};
    color:${(p: PropsCss) => (p.background === "light-theme") ? "black" : "White"}`;

const Button = styled.button`
 width:${(p: ButtonCss) => (((p.width) / (p.rows)) - p.space)}px;
 height:${(p: ButtonCss) => (((p.width) / (p.rows)) - p.space)}px;
 background-color:${(p: ButtonCss) => (p.background === "light-theme") ? "#42a671" : "#4ecbc0"};
 margin-right:4px;
 margin-bottom:4px;
`;
const Playagain = styled.button`
  ${tw`mt-8 text-white w-auto h-14 text-2xl`};
    background-color: rgb(50, 53, 243);
    border-radius: 4px;
    padding:5px;
`;
const Text = styled.p`
  color:green;
  font-size: 25px;
`;
const Result = styled.div`
${tw`p-32 flex flex-col flex-wrap justify-center items-center`};
`;
const LevelScore = styled.div`
font-size: 25px;
`;
export { DivTag, Button, Playagain, Text, Result, LevelScore };




//((p.level === p.levelCount) ? (p.width = p.width + 50, p.levelCount = p.levelCount + 2) :










