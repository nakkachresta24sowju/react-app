import { observable, action } from 'mobx';
//import { observer } from 'mobx-react';


class Todo {
    @observable id;
    @observable title;
    @observable isCompleted;
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