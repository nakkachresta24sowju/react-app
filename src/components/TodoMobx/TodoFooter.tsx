import React from 'react';

import { action } from 'mobx';

import './TodoFooter.css';
//import { action } from 'mobx';

type Props = {
    onChangeSelectedFilter: Function
    onClearCompleted: Function
}

class TodosFooter extends React.Component<Props>{
    constructor(props) {
        super(props);
        console.log("footer", props);
    }

    @action.bound
    onChangeSelectedFilter(event: any) {
        this.props.onChangeSelectedFilter(event.target.value);
    }

    @action.bound
    onClearCompleted() {
        this.props.onClearCompleted();
    }

    render() {
        return (
            <div className="counts">
                <span className=" space-between">items left</span>
                <button className="space-between" value="ALL" onClick={this.onChangeSelectedFilter}>All</button>
                <button className="space-between" value="ACTIVE" onClick={this.onChangeSelectedFilter}>Active</button>
                <button className="space-between" value="COMPLETE" onClick={this.onChangeSelectedFilter} >Completed</button>
                <button className="space-between" onClick={this.onClearCompleted}>Clear Completed</button>
            </div>);
    }
}
export default TodosFooter;
