import { observable, action } from "mobx";


class Todo {

  @observable id;
  @observable title;
  @observable completed;

  constructor(obj) {
    console.log(89890909, obj);
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
