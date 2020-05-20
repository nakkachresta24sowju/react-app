import React from "react";
import DeviceTypeText from "../../components/Hoocs/DeviceTypeText";
import CollapseExpand from "../../components/Hoocs/CollapseExpand";
import ViewEditToggle from "../../components/Hoocs/ViewEditToggle";
import DisplayMouseCoordinates from "../components/DisplayMouseCoordinates";
class PracticeAdvancedComponents extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-3xl"> HOC's Usage</p>
        <ViewEditToggle />
        <CollapseExpand />
        <DeviceTypeText />
        <p className="font-bold text-3xl">Render Props Usage</p>
        <DisplayMouseCoordinates />
      </div>
    );
  }
}
export default PracticeAdvancedComponents;
