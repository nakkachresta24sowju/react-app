import React from "react";
import MouseCoordinates from "./MouseCoordinates";
import { observer } from "mobx-react";
@observer
class DisplayMouseCoordinates extends React.Component {
  render() {
    return (
      <div className="bg-gray-300 w-full h-24">
        <p>DisplayMouseCoordinates</p>
        <MouseCoordinates />
      </div>
    );
  }
}
export default DisplayMouseCoordinates;
