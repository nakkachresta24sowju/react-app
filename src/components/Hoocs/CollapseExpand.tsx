import React from "react";
import withToggle from "../../Common/hocs/withToggle";
type Props = {
  onToggle: any;
  toggleStatus: boolean;
};
class CollapseExpand extends React.Component<Props> {
  render() {
    const { onToggle, toggleStatus } = this.props;
    return (
      <div className="bg-gray-500 w-full h-24">
        <h2>Collapse Expand</h2>
        <div>
          <span>Sample Shopping List:</span>
          <button onClick={onToggle}>
            {toggleStatus ? "Expand" : "Collapse"}
          </button>
          {toggleStatus ? (
            <div>
              <p>Choclates</p>
              <p>Ice Creams</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default withToggle(CollapseExpand);
