import { observable, action, computed } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import Todo from "../../stores/models/index";


class TodoStore {
      @observable todos = [];
      @observable selectedFilter;
      @observable getTodoListAPIStatus;
      @observable getTodoListAPIError;
      todosAPIService;

      constructor(todosAPIService) {
            console.log(34354546, todosAPIService);
            this.todosAPIService = todosAPIService;
            this.init();
      }

      @action
      init() {
            this.getTodoListAPIStatus = API_INITIAL,
                  this.getTodoListAPIError = null,
                  this.todos = [];

      }

      @action.bound
      getTodoList() {
            const todosPromise = this.todosAPIService.getTodos();
            console.log(46768, todosPromise);
            return bindPromiseWithOnSuccess(todosPromise)
                  .to(this.setTodoListAPIStatus, this.setTodoListResponse)
                  .catch(this.setTodoListAPIError)

      }

      @action.bound
      setTodoListResponse(todosResponse) {
            this.todos.push(...todosResponse.map((todo) => new Todo(todo)));
      }

      @action.bound
      setTodoListAPIError(error) {
            this.getTodoListAPIError = error;
      }

      @action.bound
      setTodoListAPIStatus(apiStatus) {
            this.getTodoListAPIStatus = apiStatus;
      }

      @action.bound
      addTodos(eachtodo) {
            this.todos.push(eachtodo);
      }

      @action.bound
      onAddTodo(title) {
            const todo = {
                  id: Math.random(),
                  title: title,
                  completed: false
            }
            if (title === "") {
                  alert("given todo should not be empty");
            }
            else {
                  this.todos.push(new Todo(todo));
            }
      }

      @action.bound
      onRemoveTodo(idvalue) {
            let array = [...this.todos];
            const indexid = (element) => element.id === idvalue;
            let index = array.findIndex(indexid);
            array.splice(index, 1);
            this.todos = array;
      }

      @action.bound
      onChangeSelectedFilter(value) {
            this.selectedFilter = value;
      }

      @action.bound
      onClearCompleted() {
            // let Todos = this.todos.filter(todo => todo.isCompleted === true);
            // this.todos.replace(Todos);
            alert("completed");
      }

      @computed get activeTodosCount() {
            let activecount = this.todos.filter((todo) => todo.isCompleted === false);
            return activecount.length;
      }

      @computed get filteredTodos() {
            let filterTodos;
            if (this.selectedFilter === "COMPLETE") {
                  filterTodos = this.todos.filter((todo) => todo.isCompleted === true);
            }
            else if (this.selectedFilter === "ACTIVE") {
                  filterTodos = this.todos.filter((todo) => todo.isCompleted === false);
            }
            else if (this.selectedFilter === "ALL") {
                  filterTodos = this.todos.map((todo) => todo);
            }

            return filterTodos;
      }
}
export default TodoStore;
