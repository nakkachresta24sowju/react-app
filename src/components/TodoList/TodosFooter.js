import React from 'react';
import './TodosFooter.css';
class TodosFooter extends React.Component {
    constructor(props) {
        super(props);
        console.log("footer", props);
    }
    onchangeState = (event) => {
        this.props.onchangeState(event.target.id);
    }
    render() {
        return (<div className="footer">
            <div id="counts">
                <span id="countitems">items left</span>&nbsp;
                    <button className="all" id="all" onClick={this.onchangeState}>All</button>&nbsp;
                    <button className="active" id="active" onClick={this.onchangeState}>Active</button>&nbsp;
                    <button className="complete" id="complete" onClick={this.onchangeState} >Completed</button>&nbsp;&nbsp;
                    <button className="clear" onClick={this.props.clearCompletedTodos}>Clear Completed</button>
            </div>
        </div>);
    }
}
export default TodosFooter;