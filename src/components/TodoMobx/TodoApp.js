import React from 'react';

import todoStore from '../../stores/TodoStores';
import AddTodo from './AddTodo.js';
import Todos from './Todos.js';
import TodoFooter from './TodoFooter.js';

import { observer } from 'mobx-react';
import { action, toJS } from 'mobx';
//import { action } from 'mobx';
//import { observable, toJS } from 'mobx';

@observer
class TodoApp extends React.Component {


    renderTodos = () => {
        console.log("hai", todoStore.filteredTodos);
        return (todoStore.filteredTodos.map(todo => <Todos todo={todo} key={todo.title} onRemoveTodo={todoStore.onRemoveTodo} onCompletedTodo={todo.onCompletedTodo} />));
    }


    render() {
        //console.log("todosrender", toJS(todoStore.tod
        return (<div>
            <AddTodo onAddTodo={todoStore.onAddTodo} />
            <span>
                {this.renderTodos()}
            </span>
            <span>{(todoStore.todos.length > 0) ? <TodoFooter onChangeSelectedFilter={todoStore.onChangeSelectedFilter} /> : null}</span>
        </div>);
    }


}
export default TodoApp;




//<Todos todo={todo} onRemoveTodo={todoStore.onRemoveTodo} onCompletedTodo={Todo.onCompletedTodo} />




// {this.state.presentState === "all" &&
//                     <div>{this.state.data.map((giventodo) =>
//                         <Todo id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange} />)}
//                     </div>
//                 }

//                 {this.state.presentState === "complete" &&
//                     <div>{this.completedTodos()}</div>
//                 }
//                 {this.state.presentState === "active" &&
//                     <div>{this.activeTodos()}</div>
//                 }
//                 <div>{this.state.show ? <TodoFooter onchangeState={this.onchangeState} clearCompletedTodos={this.clearCompletedTodos} /> : null}</div>