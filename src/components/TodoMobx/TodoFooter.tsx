import React from 'react';

import { action } from 'mobx';

import './TodoFooter.css';
//import { action } from 'mobx';

import './TodoFooter.css';
class TodosFooter extends React.Component {
    constructor(props) {
        super(props);
        console.log("footer", props);
    }
    @action.bound
    onChangeSelectedFilter(event) {
        this.props.onChangeSelectedFilter(event.target.value);
    }

    render() {
        return (
            <div className="counts">
                <span className=" space-between">items left</span>
                <button className="space-between" value="ALL" onClick={this.onChangeSelectedFilter}>All</button>
                <button className="space-between" value="ACTIVE" onClick={this.onChangeSelectedFilter}>Active</button>
                <button className="space-between" value="COMPLETE" onClick={this.onChangeSelectedFilter} >Completed</button>
                <button className="space-between" onClick={this.props.clearCompletedTodos}>Clear Completed</button>
            </div>);
    }
}
export default TodosFooter;
