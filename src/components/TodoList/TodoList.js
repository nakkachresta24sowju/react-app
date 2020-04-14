
import React from 'react';
import Todos from './Todos';
import TodosFooter from './TodosFooter';
import './TodoList.css';

import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            todoList: [],
            data: [{
                inputValue: ' ',
                checkboxStatus: ' '
            }],
            show: false,
            presentState: "all"
        };
    }


    addTodos = (event) => {
        if (event.key === 'Enter') {
            let text = event.target.value;
            if (text === "") {
                alert("given todo should not be empty");
            }
            else {
                this.setState(previousstate => ({ todoList: previousstate.todoList = [...previousstate.todoList, text] }));
                this.setState(addElement => ({ data: addElement.data = [...addElement.data, { inputValue: text, checkboxStatus: "all" }] }));
                this.setState({ giventodo: text, show: true });
                event.target.value = "";
            }
        }
        console.log("todolist", this.state.todoList);
        console.log("data", this.state.data);
    }
    removeTodos = (idvalue) => {
        let array = [...this.state.data];
        let index = array.indexOf(idvalue);
        array.splice(index, 1);
        this.setState({ data: array });
    }


    handlechange = (event) => {
        let array = [...this.state.data];
        let giventodoObject;
        if (event.target.checked === true) {
            giventodoObject = array.filter(e => e.inputValue === event.target.value);
            giventodoObject[0].checkboxStatus = "checked";
            let index = array.indexOf(giventodoObject[0]);
            console.log("index-check", index);
            const { data } = this.state;
            data[index] = giventodoObject[0];
            //this.setState({ data });
            //this.setState({data.index : giventodoObject[0]});

        }
        else {
            giventodoObject = array.filter(e => e.inputValue === event.target.value);
            giventodoObject[0].checkboxStatus = "uncheck";
            console.log(giventodoObject);
            let index = array.indexOf(giventodoObject[0]);
            console.log("index-uncheck", index);
            const { data } = this.state;
            data[index] = giventodoObject[0];
            //this.setState({ data });
            //this.state.data[index] = giventodoObject[0];
            //this.setState({data.index : giventodoObject[0]});
        }

    }


    allTodos = () => {
        let allTodoList = [...this.state.data];
        this.setState({ data: allTodoList });
        let allList = this.state.data.map((giventodo) =>
            <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} />
        );
        return allList;
    }
    activeTodos = () => {
        let active = [...this.state.data].filter(e => (e.checkboxStatus === "uncheck" || e.checkboxStatus === "all"));
        let activeList = active.map((giventodo) =>
            <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} />
        );
        return activeList;

    }
    onchangeState = (value) => {
        this.setState({ presentState: value });
    }
    completedTodos = () => {
        let complete = [...this.state.data].filter(e => e.checkboxStatus === "checked");
        let completedList = complete.map((giventodo) =>
            <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} />
        );
        return completedList;
    }

    clearCompletedTodos = () => {
        alert("hello");
    }

    render() {
        console.log(this.state.updatedTodos);
        return (<div>
            <div className="todos">todos</div>
            <input type="text" id="item" onKeyPress={this.addTodos} />
            {this.state.presentState === "all" &&
                <div>{this.state.data.map((giventodo) =>
                    <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} />)}
                </div>
            }

            {this.state.presentState === "complete" &&
                <div>{this.completedTodos()}</div>
            }
            {this.state.presentState === "active" &&
                <div>{this.activeTodos()}</div>
            }
            <div>{this.state.show ? <TodosFooter onchangeState={this.onchangeState} clearCompletedTodos={this.clearCompletedTodos} /> : null}</div>
        </div>);
    }
}
export default TodoList;
