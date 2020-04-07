import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import tw from "tailwind.macro";
const EmojiImage = styled.img`
${tw`h-48 w-56 m-4 object-cover`}
`;
const EmojiName = styled.p` 
${tw`  m-2 text-center`}
`;

const EmojisCard = styled.div` 
${tw`bg-white m-4 shadow-xl`}
background-color:${props => props.background ? "white" : "#3182ce"};
color:${props => props.background ? "black" : "white"};
`;


const EmojiCardContainer = styled.div`
${tw`flex flex-wrap justify-center bg-blue-100`}
background-color:${props => props.background ? "#c3dafe" : "#2d3748"};
color:${props => props.background ? "black" : "pink"};
display:flex;
border: 1px  solid grey;  
`;

function EmojiCard(props) {
    const onEmojiClick = (event) => {
        props.onEmojiClick(event);
    }
    return (
        <EmojiCardContainer background={props.isThemeChanged} >
            {
                props.emojis.map((eachemoji) =>
                    <EmojisCard background={props.isThemeChanged} key={eachemoji.id} id={eachemoji.id} onClick={() => onEmojiClick(eachemoji)}>
                        <EmojiImage id={eachemoji.id} src={eachemoji.image} alt="emoji-images"></EmojiImage>
                        <EmojiName id={eachemoji.id} >{eachemoji.name}</EmojiName>
                    </EmojisCard>)
            }
        </EmojiCardContainer>);
}

export default withRouter(EmojiCard);

