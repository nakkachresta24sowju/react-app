import { observable, action } from "mobx";
//import { observer } from 'mobx-react';

class Todo {
  @observable id: string;
  @observable title: string;
  @observable isCompleted: boolean;
  constructor() {
    this.id = Math.random().toString();
    this.title = " ";
    this.isCompleted = false;
  }

  @action.bound
  onCompletedTodo() {
    this.isCompleted = !this.isCompleted;
  }

  @action.bound
  onUpdateTodoTitle() {
    //return this.selectedTheme;
  }
}
export default Todo;
