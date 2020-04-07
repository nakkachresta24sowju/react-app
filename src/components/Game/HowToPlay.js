import React from 'react';
import styled from '@emotion/styled';
import tw from "tailwind.macro";
const TextForHowToPlay = styled.p`
${tw`text-2xl `}
`;
const InstructionToPlay = styled.p`
${tw` text-xl p-2`}

`;

const Footer = styled.div`
${tw`flex flex-col`}
background-color:${props => props.background ? "white" : "#4a5568"};
color:${props => props.background ? "black" : "white"};
display:flex;
border: 1px  solid grey;  
`;

function HowToPlay(props) {
    console.log("howtoplay", props.isThemeChanged);
    return (<Footer background={props.isThemeChanged}>
        <TextForHowToPlay><b>How to play?</b></TextForHowToPlay>
        <InstructionToPlay>Get points by clicking on an image but don't click on any image more than once!</InstructionToPlay>
    </Footer>);
}
export default HowToPlay;
