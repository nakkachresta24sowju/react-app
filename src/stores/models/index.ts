import { observable, action } from "mobx";
//import { observer } from 'mobx-react';

class Todo {
  @observable id: string;
  @observable title: string;
  @observable completed: boolean;

  constructor(obj) {
    this.id = obj.id.toString();
    this.title = obj.title;
    this.completed = obj.completed;
  }

  @action.bound
  onCompletedTodo(completed) {
    this.completed = !completed;
  }

  @action.bound
  onUpdateTodoTitle() {
    //return this.selectedTheme;
  }
}
export default Todo;
