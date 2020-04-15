import { observable, action } from 'mobx';
//import Cell from '../models/Cell/index';

class GameStore {
    @observable currentLevelGridCells: Array<string>;
    @observable level: number;
    @observable topLevel: number;
    @observable selectedCellsCount: number;
    @observable isGameCompleted: boolean;


    constructor() {
        this.currentLevelGridCells = []
        this.level = 0;
        this.topLevel = 0;
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;

    }


    @action.bound
    onCellClick() {


    }
    @action.bound
    setGridCells() {

    }

    @action.bound
    goToNextLevelAndUpdateCells() {

    }
    @action.bound
    goToInitialLevelAndUpdateCells() {

    }
    @action.bound
    resetSelectedCellsCount() {

    }
    @action.bound
    incrementSelectedCellsCount() {

    }
    @action.bound
    onPlayAgainClick() {

    }
    @action.bound
    resetGame() {

    }
    @action.bound
    setTopLevel() {

    }
}
const gameStore = new GameStore()
export default gameStore;