import React from 'react'
import { observer } from 'mobx-react'
import Header from './Header'
import GameField from './GameField'
import Cell from './Cell'
import GameResult from './GameResult'
import gameStore from '../../stores/GameStore'
import gmThemeStore from '../../stores/GmThemeStore';


@observer
class GridMemoryGame extends React.Component {

    render() {
        return (<div>
            <Header selectedTheme={gmThemeStore.selectedTheme} onChangeSelectedTheme={gmThemeStore.onChangeSelecetdTheme} level={gameStore.level} topLevel={gameStore.topLevel} />
            <GameField />
            <Cell />
            <GameResult />
        </div>);
    }
}
export default GridMemoryGame;