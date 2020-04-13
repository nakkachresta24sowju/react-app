import { observable, action, toJS, computed } from 'mobx';
import Todo from '../../stores/models/index.js';

class TodoStores {
    @observable todos = [];
    @observable selectedFilter = "ALL";


    @action.bound
    onAddTodo(value) {
        if (value === "") {
            alert("given todo should not be empty");
        }
        else {
            let todoObject = new Todo()
            todoObject.title = value;
            this.todos.push(todoObject);
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

    }

    // @computed get activeTodosCount() {
    //     return this.todos;
    // }

    @computed get filteredTodos() {
        let filterTodos;
        if (this.selectedFilter === "COMPLETE") {
            filterTodos = this.todos.filter(todo => todo.isCompleted === true);

        }
        else if (this.selectedFilter === "ACTIVE") {
            filterTodos = this.todos.filter(todo => todo.isCompleted === false);

        }
        else if (this.selectedFilter === "ALL") {
            filterTodos = this.todos.map(todo => todo);

        }

        return filterTodos;
    }
}
const todoStore = new TodoStores()
export default todoStore;