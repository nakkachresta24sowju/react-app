import React from 'react';
import './Todo.css';
class Todos extends React.Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (<div>
            <ul type="none" className="givenTodoList">
                <li className="li" key={this.props.id}>
                    <input type="checkbox" value={this.props.id} className="checkbox" defaultChecked={this.props.isCompleted} onClick={this.props.checkhandle} />
                    <input type="text" className="giventodo"  value={this.props.id} />
                    <button onClick={this.props.removeTodoItem} className="close">x</button>
                </li>
            </ul>
        </div>);
      }
}
export default Todos;
