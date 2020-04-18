import React from 'react'
import { observer } from 'mobx-react';
import { Playagain, Text, Result, LevelScore } from './GridGameStyles';
type Props = {
    level: number
    onPlayAgainClick: Function
}

@observer
class GameResult extends React.Component<Props>{
    onPlayAgainClick = () => {
        this.props.onPlayAgainClick();
    }

    render() {
        const { level } = this.props;
        return (<Result>
            <LevelScore>{level}</LevelScore>
            <Text>Congratulations! You Completed All The Levels</Text>
            <Playagain onClick={this.onPlayAgainClick}>Play Again</Playagain></Result>)
    }
}
export default GameResult;