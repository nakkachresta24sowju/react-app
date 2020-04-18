import React from 'react';
import { observer } from 'mobx-react';
import Cell from './Cell';
import GameResult from './GameResult';
import { DivTag } from './GridGameStyles';
type Props = {
    cells: any
    onCellClick: Function
    level: number
    selectedTheme: string
    rows: number
    isGameCompleted: boolean
    onPlayAgainClick: Function
    space: number
    width: number
}


@observer
class GameField extends React.Component<Props>{


    renderCells = () => {
        const { cells, selectedTheme, onCellClick, rows, space, width } = this.props;
        return (cells.map((eachcell) => <Cell key={eachcell.id} cell={eachcell} selectedTheme={selectedTheme} onCellClick={onCellClick} space={space} width={width} rows={rows} />))
    }

    render() {
        const { selectedTheme, isGameCompleted, space, width, level, onPlayAgainClick } = this.props;
        if (isGameCompleted === true) {
            return (<GameResult level={level} onPlayAgainClick={onPlayAgainClick} />);
        }
        else {
            return (<DivTag background={selectedTheme} space={space} width={width}>{this.renderCells()}</DivTag>);
        }
    }
}
export default GameField;


//background={selectedTheme}
//className={(selectedTheme === "light-theme") ? "light-theme  grid-container" : "dark-theme  grid-container"}