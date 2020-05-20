import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
@observer
class MouseCoordinates extends React.Component {
  @observable x: number = 0;
  @observable y: number = 0;

  @action.bound
  handleMouseMove(event) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <p>
          The mouse position is ({this.x}, {this.y})
        </p>
      </div>
    );
  }
}
export default MouseCoordinates;
