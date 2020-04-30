import React from 'react';
import { observer, inject } from 'mobx-react';
import Todos from './Todos';
import TodosFooter from './TodosFooter';
import './TodoList.css';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../common/NoDataView/index.js';

@inject('todoStore')
@observer
class TodoList extends React.Component {

      constructor(props) {
            super(props);
            this.state = {
                  isChecked: false,
                  todoList: [],
                  data: [{
                        inputValue: ' ',
                        checkboxStatus: ' ',
                        isCompleted: false
                  }],
                  show: false,
                  presentState: "all"
            };
      }
      componentDidMount() {
            this.doNetworkCalls();
      }

      doNetworkCalls = () => {
            const { todoStore } = this.props;
            todoStore.getTodoList();
      }

      renderTodoList = () => {

            const { todoStore } = this.props;
            const { todos } = todoStore;
            if (todos.length === 0) {
                  return <NoDataView/>;
            }
            return todos.map((eachtodo) => <Todos id={eachtodo.title} todoObject={eachtodo} removeTodoItem={() => this.removeTodos(eachtodo)} checkhandle={this.handlechange} isCompleted={eachtodo.isCompleted}/>);
            //<Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} isCompleted={giventodo.isCompleted}/>
            //<div>{eachtodo.title}</div>
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
                  giventodoObject[0].isCompleted = true;
                  let index = array.indexOf(giventodoObject[0]);
                  const { data } = this.state;
                  data[index] = giventodoObject[0];

            }
            else {
                  giventodoObject = array.filter(e => e.inputValue === event.target.value);
                  giventodoObject[0].checkboxStatus = "uncheck";
                  giventodoObject[0].isCompleted = false;
                  let index = array.indexOf(giventodoObject[0]);
                  const { data } = this.state;
                  data[index] = giventodoObject[0];
            }

      }


      allTodos = () => {
            let allTodoList = [...this.state.data];
            this.setState({ data: allTodoList });
            let allList = this.state.data.map((giventodo) =>
                  <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} isCompleted={giventodo.isCompleted}/>
            );
            return allList;
      }
      activeTodos = () => {
            let active = [...this.state.data].filter(e => (e.checkboxStatus === "uncheck" || e.checkboxStatus === "all"));
            let activeList = active.map((giventodo) =>
                  <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} isCompleted={giventodo.isCompleted}/>
            );
            return activeList;

      }
      onchangeState = (value) => {
            this.setState({ presentState: value });
      }
      completedTodos = () => {
            let complete = [...this.state.data].filter(e => e.checkboxStatus === "checked");
            let completedList = complete.map((giventodo) =>
                  <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} isCompleted={giventodo.isCompleted}/>
            );
            return completedList;
      }

      clearCompletedTodos = () => {
            alert("hello");
      }

      render() {
            const { todoStore } = this.props;
            const { getTodoListAPIStatus, getTodoListAPIError } = todoStore;
            console.log(this.state.updatedTodos);
            return (<div>
            <div className="todos">todos</div>
            <input type="text" id="item" onKeyPress={this.addTodos} />
            {this.state.presentState === "all" &&
                <div>{this.state.data.map((giventodo) =>
                <Todos key={giventodo.inputValue} id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} isCompleted={giventodo.isCompleted}/>)}
                </div>
            }

            {this.state.presentState === "complete" &&
                <div>{this.completedTodos()}</div>
            }
            {this.state.presentState === "active" &&
                <div>{this.activeTodos()}</div>
            }
            {
                  <LoadingWrapperWithFailure
                                        apiError={getTodoListAPIError}
                                        apiStatus={getTodoListAPIStatus}
                                        onRetryClick={this.doNetworkCalls}
                                        renderSuccessUI={this.renderTodoList}/>
            }
            <div>{this.state.show ? <TodosFooter onchangeState={this.onchangeState} clearCompletedTodos={this.clearCompletedTodos} /> : null}</div>
             
           
        </div>);
      }
}
export default TodoList;
