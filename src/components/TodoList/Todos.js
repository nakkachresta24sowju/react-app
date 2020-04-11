import React from 'react';
import './Todo.css';
class Todos extends React.Component {
    constructor(props) {
        super(props);
        console.log("prop", props);
    }

    render() {
        console.log("input field name ", this.props.id);
        return (<div>
            <ul type="none" className="givenTodoList">
                <li className="li">
                    <input type="checkbox" value={this.props.id} className="checkbox" onClick={this.props.checkhandle} />
                    <input type="text" className="giventodo" value={this.props.id} />
                    <button onClick={this.props.removeTodoItem} className="close">x</button>
                </li>
            </ul>
        </div>);
    }
}
export default Todos;
