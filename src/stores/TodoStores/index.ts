import { observable, action, computed, toJS } from "mobx";
import Todo from "../../stores/models/index";

class TodoStores {
  @observable todos: Array<Todo> = [];
  @observable selectedFilter: string = "ALL";

  // @action.bound
  // addTodos(eachtodo) {
  //   this.todos.push(eachtodo);
  //   console.log("addtodoos",this.todos)
  // }

  @action.bound
  onAddTodo(title: string) {
    const todoobj = {
      id: Math.random(),
      title: title,
      completed: false,
    };
    if (title === "") {
      alert("given todo should not be empty");
    } else {
      this.todos.push(new Todo(todoobj));
    }
    console.log("cintent", toJS(this.todos));
  }

  @action.bound
  onRemoveTodo(idvalue: string) {
    let array = [...this.todos];
    const indexid = (element) => element.id === idvalue;
    let index = array.findIndex(indexid);
    array.splice(index, 1);
    this.todos = array;
  }

  @action.bound
  onChangeSelectedFilter(value: string) {
    this.selectedFilter = value;
  }

  @action.bound
  onClearCompleted() {
    // let Todos = this.todos.filter(todo => todo.isCompleted === true);
    // this.todos.replace(Todos);
    alert("completed");
  }

  @computed get activeTodosCount() {
    let activecount = this.todos.filter((todo) => todo.completed === false);
    return activecount.length;
  }

  @computed get filteredTodos() {
    let filterTodos;
    if (this.selectedFilter === "COMPLETE") {
      filterTodos = this.todos.filter((todo) => todo.completed === true);
    } else if (this.selectedFilter === "ACTIVE") {
      filterTodos = this.todos.filter((todo) => todo.completed === false);
    } else if (this.selectedFilter === "ALL") {
      filterTodos = this.todos.map((todo) => todo);
    }

    return filterTodos;
  }
}
const todoStore = new TodoStores();
export { todoStore as default, TodoStores };
