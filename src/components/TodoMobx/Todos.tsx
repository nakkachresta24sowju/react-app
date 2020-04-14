import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import './Todos.css';

import Todo from '../../stores/models/index';
type Props = {
    onRemoveTodo: Function
    todo: Todo
    onCompletedTodo: Function
}

@observer
class Todos extends React.Component<Props>{
    constructor(props) {
        super(props);

    }

    @action.bound
    onRemoveTodo(event: any) {
        this.props.onRemoveTodo(event.target.id);
    }

    @action.bound
    onCompletedTodo() {
        this.props.todo.onCompletedTodo();
    }


    // @action.bound
    // onUpdateTodoTitle() {

    // }

    render() {
        const { title, id, isCompleted } = this.props.todo;
        return (<div>
            <span className="li givenTodoList" id={id}>
                <input type="checkbox" className="checkbox" defaultChecked={isCompleted} onClick={this.onCompletedTodo} />
                <input type="text" className="giventodo" defaultValue={title} />
                <button id={id} onClick={this.onRemoveTodo} className="close">x</button>
            </span>
        </div>);
    }
}
export default Todos;