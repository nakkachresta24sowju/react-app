import React from 'react';
import './Todos.css';
import { action, toJS } from 'mobx';

import { observer } from 'mobx-react';

@observer
class Todos extends React.Component {
    constructor(props) {
        super(props);

    }

    @action.bound
    onRemoveTodo(event) {
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