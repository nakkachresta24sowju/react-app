import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { EachGrid } from "./Styles";

type Props = {
  cell: any;
  selectedTheme: string;
  onCellClick: Function;
  rows: number;
  space: number;
  width: number;
};

@observer
class Cell extends React.Component<Props> {
  @observable shouldShowHiddenCells: boolean;
  @observable isClickedCell: boolean;
  @observable disabled: boolean;

  constructor(props) {
    super(props);
    this.shouldShowHiddenCells = true;
    this.isClickedCell = false;
    this.disabled = true;
  }
  onCellClick = () => {
    if (!this.isClickedCell && !this.shouldShowHiddenCells) {
      const { onCellClick, cell } = this.props;
      this.isClickedCell = true;
      onCellClick(cell, this.disabled);
    }
  };
  componentDidMount() {
    const { rows } = this.props;
    setTimeout(
      () => ((this.shouldShowHiddenCells = false), (this.disabled = false)),
      rows * 1000
    );
  }
  render() {
    const { cell, space, width, rows, selectedTheme } = this.props;
    if (
      (cell.isHidden && this.shouldShowHiddenCells) ||
      (this.isClickedCell && cell.isHidden)
    ) {
      return (
        <EachGrid
          disabled={this.disabled}
          rows={rows}
          space={space}
          width={width}
          background={selectedTheme}
          onClick={this.onCellClick}
        >
          y
        </EachGrid>
      );
    } else if (!cell.isHidden && this.isClickedCell) {
      return (
        <EachGrid
          disabled={this.disabled}
          rows={rows}
          space={space}
          width={width}
          background={selectedTheme}
          style={{ backgroundColor: "red" }}
          onClick={this.onCellClick}
        ></EachGrid>
      );
    } else {
      return (
        <EachGrid
          disabled={this.disabled}
          rows={rows}
          space={space}
          width={width}
          background={selectedTheme}
          style={{ backgroundColor: "#2a4363" }}
          onClick={this.onCellClick}
        ></EachGrid>
      );
    }
  }
}
export default Cell;
