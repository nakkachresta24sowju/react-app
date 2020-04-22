import { observable, action } from "mobx";
//import { observer } from 'mobx-react';

class Todo {
  @observable id: string;
  @observable title: string;
  @observable isCompleted: boolean;
  constructor(obj) {
    console.log(89890909,obj);
    this.id = obj.id.toString();
    this.title = obj.title;
    this.isCompleted = obj.completed;
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
