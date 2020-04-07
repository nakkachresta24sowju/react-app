import React from 'react';
import styled from '@emotion/styled';
import tw from "tailwind.macro";

const Parent = styled.div`
${tw` flex h-15`}
background-color:${props => props.background ? "white" : "#4a5568"};
color:${props => props.background ? "black" : "white"};
display:flex;
border: 1px  solid grey;
`;
const GameName = styled.p`
${tw` text-3xl  pt-2  `}
`;
const Scores = styled.span` 
${tw`  flex  mx-4 `}
`;
const Score = styled.p`
${tw` p-4 `}
margin-right:16px;
`;

const Button = styled.button` 
width:100px;
`;


class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }
  onChangeTheme = () => {
    this.props.onChangeTheme();
  }
  render() {
    console.log("navbar", this.props.isThemeChanged);
    return (
      <Parent background={this.props.isThemeChanged}>
        <GameName>Emoji Game</GameName>
        <Scores>
          <Score><b>Score:{this.props.score}</b></Score>
          <Score><b>Top Score:{this.props.topScore}</b></Score>
        </Scores>
        <Button onClick={this.onChangeTheme}>
          {this.props.isThemeChanged ? 'Light Theme' : 'Dark Theme'}
        </Button>
      </Parent>
    );
  }
}


export default Navbar;



// @media (min-width: 420px) {
//   margin-right:40px; 
// }
// @media (min-width: 576px) {
//   margin-right:140px;

// }
// @media (min-width: 768px) {
//   margin-right:340px;


// }
// @media (min-width: 992px) {
//   margin-right:540px;

// }
// @media (min-width: 1200px) {
//   margin-right:900px;
// }