import React from "react";
import { action } from "mobx";
import {observer} from 'mobx-react'
import './TodoFooter.css';

type Props = {
  onChangeSelectedFilter: Function;
  onClearCompleted: Function;
  activeTodosCount: number;
};

@observer
class TodosFooter extends React.Component<Props> {
  constructor(props) {
    super(props);
    console.log("footer", props);
  }

  @action.bound
  onChangeSelectedFilter(event: any) {
    this.props.onChangeSelectedFilter(event.target.value);
  }

  @action.bound
  onClearCompleted() {
    this.props.onClearCompleted();
  }

  render() {
    return (
      <div className="counts">
        <span className=" space-between">
          items left {this.props.activeTodosCount}
        </span>
        <button
          className="space-between"
          value="ALL"
          onClick={this.onChangeSelectedFilter}
        >
          All
        </button>
        <button
          className="space-between"
          value="ACTIVE"
          onClick={this.onChangeSelectedFilter}
        >
          Active
        </button>
        <button
          className="space-between"
          value="COMPLETE"
          onClick={this.onChangeSelectedFilter}
        >
          Completed
        </button>
        <button className="space-between" onClick={this.onClearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  }
}
export default TodosFooter;



/*
constructor(props) {
        super(props);
        console.log("footer", props);
    }
    @action.bound
    onChangeSelectedFilter(event) {
        this.props.onChangeSelectedFilter(event.target.value);
    }  */