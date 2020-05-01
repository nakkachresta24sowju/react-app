import React from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import "./TodosFooter.css";
class TodosFooter extends React.Component {
  constructor(props) {
    super(props);
    console.log("footer", props);
  }
  // @action.bound
  onChangeSelectedFilter(event) {
    this.props.onChangeSelectedFilter(event.target.value);
  }

  //@action.bound
  onClearCompleted() {
    this.props.onClearCompleted();
  }
  render() {
    return (
      <div className="footer">
        <div id="counts">
          <span id="countitems">items left</span>&nbsp;
          <button
            className="all"
            id="all"
            onClick={this.onChangeSelectedFilter}
          >
            All
          </button>
          &nbsp;
          <button
            className="active"
            id="active"
            onClick={this.onChangeSelectedFilter}
          >
            Active
          </button>
          &nbsp;
          <button
            className="complete"
            id="complete"
            onClick={this.onChangeSelectedFilter}
          >
            Completed
          </button>
          &nbsp;&nbsp;
          <button className="clear" onClick={this.onClearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}
export default TodosFooter;
