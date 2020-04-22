import React from 'react';
import styled from '@emotion/styled';
import tw from "tailwind.macro";
const Button = styled.button`
background-color:${props => props.background ? "#F8F8FF" : "black"};
color:${props => props.background ? "black" : "#f8f8ff"};
border: 4px  solid green;
`;

const Parent = styled.div`
background-color:${props => props.background ? "pink" : "black"};
color:${props => props.background ? "black" : "pink"};
display:flex;
@media (min-width: 420px) {
 
}
@media (min-width: 576px) {

  
}
@media (min-width: 768px) {
 
}
@media (min-width: 992px) {
 
}
@media (min-width: 1200px) {
 
}
`;
const GameName = styled.p`
${tw` text-3xl  pt-2 w-56 `}
@media (min-width: 420px) {
  margin-right:40px; 
}
@media (min-width: 576px) {
  margin-right:140px;
  
}
@media (min-width: 768px) {
  margin-right:340px;
  
  
}
@media (min-width: 992px) {
  margin-right:540px;
  
}
@media (min-width: 1200px) {
  margin-right:900px;
  

}
border: 4px  solid green;
`;
const Scores = styled.span` 
${tw`  flex  mx-4 `}
`;
const Score = styled.p`
${tw` p-4 `}
margin-right:16px;
border: 4px  solid green;

`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <Parent background={this.state.isToggleOn}>
                <GameName>Emoji Game</GameName>
                <Scores>
                    <Score><b>Score:0</b></Score>
                    <Score><b>Top Score:0</b></Score>
                </Scores>
                <Button background={this.state.isToggleOn} onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Light Mode' : 'Dark Mode'}
                </Button>
            </Parent>
        );
    }
}


export default Header;