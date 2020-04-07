import React from 'react';
import styled from '@emotion/styled';
import tw from "tailwind.macro";
const Button = styled.button`
${tw` bg-indigo-600 rounded-sm text-white px-6 h-12 text-2xl`}
hover:bg-indigo-800;
`;

const WinOrLoose = styled.p`
${tw` text-red-600 text-3xl font-bold`}
`;

const ChildContainer = styled.div`
${tw` flex flex-col justify-center items-center `}
`;
const ScoreValue = styled.p` 
${tw` text-3xl`}
`;

const Container = styled.div`
${tw` text-center bg-blue-100`}
height:540px;
padding:10%;
background-color:${props => props.background ? "#c3dafe" : "#2d3748"};
color:${props => props.background ? "black" : "pink"};
`;

class LooseTheGame extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.onPlayAgainClick();
    }

    render() {
        console.log("loosethegame", this.props.isThemeChanged);
        return (
            <Container background={this.props.isThemeChanged}>
                <ChildContainer>
                    <ScoreValue>{this.props.score}</ScoreValue>
                    <WinOrLoose>You {this.props.isWon ? "Won" : "Loose"}!</WinOrLoose>
                    <Button onClick={this.handleClick}>
                        Play Again
                    </Button>
                </ChildContainer>
            </Container>
        );
    }
}


export default LooseTheGame;
