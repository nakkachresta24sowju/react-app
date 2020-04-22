import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import TodoFooter from "./TodoFooter";
import todoStore from "../../stores/TodoStores";
//import { Todo }  from '../../stores/models/index';

@observer
class TodoApp extends React.Component {
  @observable notFound = false;
  @observable loading = true;
  @observable networkError = false;
  @observable isConnected = false;

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((json) => json.json())
      .then((jsonData) => {
        this.addTodos(jsonData);
        this.loading = false;
        if (jsonData.length === 0) {
          this.notFound = true;
        }
        if (!navigator.onLine) {
          this.isConnected = true;
        }
      })
      .catch((error) => {
        this.networkError = true;
      });
  }

  renderTodos = () => {
    console.log("hai", todoStore.filteredTodos);
    return todoStore.filteredTodos.map((todo) => (
      <Todos
        todo={todo}
        key={todo.title}
        onRemoveTodo={todoStore.onRemoveTodo}
        onCompletedTodo={todo.onCompletedTodo}
      />
    ));
  };

  addTodos = (object) => {
    const { addTodos } = todoStore;
    object.map((obj) => addTodos(obj));
  };

  render() {
    if (this.loading) {
      return (
        <img  alt ="loading image" src="https://tap.ibhubs.in/react/assignments/assignment-10/preview/loading-view.png" />
      );
    } else if (this.networkError) {
      return (
        <img alt ="network-failure image" src="https://tap.ibhubs.in/react/assignments/assignment-10/preview/failure-view.png" />
      );
    } else if (this.notFound) {
      console.log("notfound", this.notFound);
      return (
        <img alt="no-data-found image" src="https://tap.ibhubs.in/react/assignments/assignment-10/preview/no-data-view.png" />
      );
    } else if (this.isConnected) {
      return <div>Something went wrong</div>;
    } else {
      return (
        <div>
          <AddTodo onAddTodo={todoStore.onAddTodo} />
          <span>{this.renderTodos()}</span>
          <span>
            {todoStore.todos.length > 0 ? (
              <TodoFooter
                onChangeSelectedFilter={todoStore.onChangeSelectedFilter}
                activeTodosCount={todoStore.activeTodosCount}
                onClearCompleted={todoStore.onClearCompleted}
              />
            ) : null}
          </span>
        </div>
      );
    }
  }
}
export default TodoApp;
