import React from 'react'
import { observer } from 'mobx-react'
import Header from './Header'
import GameField from './GameField'
import './GridMemoryGame.css'
import gameStore from '../../stores/GameStore'
import gmThemeStore from '../../stores/GmThemeStore';


@observer
class GridMemoryGame extends React.Component {
    constructor(props) {
        super(props)
        gameStore.setGridCells();
    }

    render() {
        let width = (300 + (Math.floor(gameStore.level / 2) * 50));
        const space = 8;
        const selectedTheme = gmThemeStore.selectedTheme;
        return (<div className={(selectedTheme === "light-theme") ? "light-theme game-container" : "dark-theme  game-container"}>
            <Header selectedTheme={gmThemeStore.selectedTheme} onChangeSelectedTheme={gmThemeStore.onChangeSelecetdTheme} level={gameStore.level} topLevel={gameStore.topLevel} />
            <GameField selectedTheme={gmThemeStore.selectedTheme} cells={gameStore.currentLevelGridCells} onCellClick={gameStore.onCellClick} level={gameStore.level} rows={gameStore.rows} onPlayAgainClick={gameStore.onPlayAgainClick} isGameCompleted={gameStore.isGameCompleted} width={width} space={space} />
        </div>);
    }
}
export default GridMemoryGame;


