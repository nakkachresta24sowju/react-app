import React from "react";
import { observer } from "mobx-react";
import withToggle from "../../Common/hocs/withToggle";
import { observable } from "mobx";
type Props = {
  onToggle: any;
  toggleStatus: boolean;
};
@observer
class ViewEditToggle extends React.Component<Props> {
  @observable text: string = "Click on the edit button to start editing";

  onEdit = (event) => {
    this.text = event.target.value;
  };

  render() {
    const { onToggle, toggleStatus } = this.props;

    return (
      <div className="bg-gray-300 w-full h-24">
        <h2>View Edit Toggle</h2>
        {toggleStatus ? (
          <input value={this.text} onChange={this.onEdit} />
        ) : (
          <span>{this.text}</span>
        )}
        <button onClick={onToggle}>{toggleStatus ? "Edit" : "Cancel"}</button>
      </div>
    );
  }
}
export default withToggle(ViewEditToggle);
