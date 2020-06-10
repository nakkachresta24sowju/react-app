import { observable, action } from "mobx";
import Cell from "../models/Cell/index";

class GameStore {
  @observable currentLevelGridCells: Array<any>;
  @observable level: number;
  @observable topLevel: number;
  @observable selectedCellsCount: number;
  @observable isGameCompleted: boolean;
  @observable rows: number;
  @observable timerIdForWrongClick: number = 0;
  @observable timerIdForRightClick: number = 0;
  intervalId: any;

  constructor() {
    this.currentLevelGridCells = [];
    this.level = 0;
    this.topLevel = 0;
    this.selectedCellsCount = 0;
    this.isGameCompleted = false;
    this.rows = 3;
    this.intervalId = 0;
  }

  @action.bound
  onCellClick(cell, disabled) {
    if (cell.isHidden) {
      this.incrementSelectedCellsCount();
      if (this.selectedCellsCount === this.rows) {
        disabled = true;
        this.timerIdForWrongClick = window.setTimeout(
          this.goToNextLevelAndUpdateCells,
          150
        );
      }
    } else if (cell.isHidden === false) {
      this.resetSelectedCellsCount();
      disabled = false;
      this.goToInitialLevelAndUpdateCells();
    }
  }

  @action.bound
  setGridCells() {
    for (let i = 0; i < this.rows; i++) {
      const cellObject = new Cell();
      cellObject.isHidden = true;
      this.currentLevelGridCells.push(cellObject);
    }
    for (let i = 0; i < this.rows * this.rows - this.rows; i++) {
      const cellObject = new Cell();
      this.currentLevelGridCells.push(cellObject);
    }
    this.shuffleHiddenCells();
    const time = this.rows * this.rows * 1000 - this.level * this.rows * 1000;
    this.intervalId = setInterval(this.resetGame, time);
  }

  shuffleHiddenCells = () => {
    for (let i = this.currentLevelGridCells.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.currentLevelGridCells[i], this.currentLevelGridCells[j]] = [
        this.currentLevelGridCells[j],
        this.currentLevelGridCells[i],
      ];
    }
  };

  @action.bound
  goToNextLevelAndUpdateCells() {
    clearInterval(this.intervalId);
    this.selectedCellsCount = 0;
    this.rows = this.rows + 1;
    this.level = this.level + 1;
    this.currentLevelGridCells = [];
    if (this.level === 2) {
      this.isGameCompleted = true;
    }
    this.setTopLevel();
    this.setGridCells();
  }

  @action.bound
  goToInitialLevelAndUpdateCells() {
    clearInterval(this.intervalId);
    this.level = 0;
    this.rows = 3;
    this.currentLevelGridCells = [];
    this.setTopLevel();
    this.setGridCells();
  }

  @action.bound
  resetSelectedCellsCount() {
    this.selectedCellsCount = 0;
  }

  @action.bound
  incrementSelectedCellsCount() {
    this.selectedCellsCount = this.selectedCellsCount + 1;
  }

  @action.bound
  onPlayAgainClick() {
    this.isGameCompleted = false;
    this.resetGame();
  }

  @action.bound
  resetGame() {
    clearInterval(this.intervalId);
    this.selectedCellsCount = 0;
    this.level = 0;
    this.rows = 3;
    this.currentLevelGridCells = [];
    this.setTopLevel();
    this.setGridCells();
  }

  @action.bound
  setTopLevel() {
    if (this.level > this.topLevel) {
      this.topLevel = this.level;
    } else {
      this.topLevel = this.topLevel;
    }
  }
}
const gameStore = new GameStore();
export default gameStore;

/*this.timerIdForWrongClick = window.setTimeout(
  this.goToNextLevelAndUpdateCells,
  50*/
