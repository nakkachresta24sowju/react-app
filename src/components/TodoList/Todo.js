import React from 'react';
class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
