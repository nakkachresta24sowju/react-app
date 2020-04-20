import React from "react";
import { observer } from "mobx-react";
import { PlayAgain, CongratulationsText, Result, TopLevel } from "./Styles";
type Props = {
  level: number;
  onPlayAgainClick: Function;
};

@observer
class GameResult extends React.Component<Props> {
  onPlayAgainClick = () => {
    const {onPlayAgainClick} = this.props
    onPlayAgainClick();
  };

  render() {
    const { level } = this.props;
    return (
      <Result>
        <TopLevel>
          <b>{level}</b>
        </TopLevel>
        <CongratulationsText>
          <b>Congratulations! You Completed All The Levels</b>
        </CongratulationsText>
        <PlayAgain onClick={this.onPlayAgainClick}>Play Again</PlayAgain>
      </Result>
    );
  }
}
export default GameResult;
