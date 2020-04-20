import React from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { observable } from "mobx";
import "./AddTodo.css";

type Props = {
  onAddTodo: Function;
};
@observer
class AddTodo extends React.Component<Props> {
  @observable todoTitle;

  @action.bound
  onAddTodo(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let text = event.target.value;
      this.props.onAddTodo(text);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div>
        <div className="todos">todos</div>
        <input className="inputTag" type="text" onKeyPress={this.onAddTodo} />
      </div>
    );
  }
}
export default AddTodo;
