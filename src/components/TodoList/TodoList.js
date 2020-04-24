import React from 'react';
import { observer, inject } from 'mobx-react';
import Todos from './Todos';
import TodosFooter from './TodosFooter';
import './TodoList.css';
import todoStore from "../../stores/TodoStore";
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../common/NoDataView/index.js';

@inject('todoStore')
@observer
class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {
        const { todoStore } = this.props;
        todoStore.getTodoList();
    }

    renderTodos = () => {
        const { todoStore } = this.props;
        const { todos } = todoStore;
        if (todos.length === 0) {
            return <NoDataView/>;
        }
        const { onRemoveTodo, onCompletedTodo, onClearCompleted } = todoStore;
        return todos.map((eachtodo) => <Todos title={eachtodo.title} todoObject={eachtodo} onRemoveTodo={todoStore.onRemoveTodo} completed={eachtodo.completed}/>);

    }

    onAddTodo = (object) => {
        const { onAddTodo } = todoStore;
        object.map((obj) => onAddTodo(obj.title));
    };

    render() {
        const { todoStore } = this.props;
        const { getTodoListAPIStatus, getTodoListAPIError } = todoStore;
        return (
            <div>
            <div className="todos">todos</div>
            <input type="text" id="item" onKeyPress={this.onAddTodo} />
            <LoadingWrapperWithFailure
                apiError={getTodoListAPIError}
                apiStatus={getTodoListAPIStatus}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderTodos}/>
          <span>
            {todoStore.todos.length > 0 ? (
              <TodosFooter
                onChangeSelectedFilter={todoStore.onChangeSelectedFilter}
                activeTodosCount={todoStore.activeTodosCount}
                onClearCompleted={todoStore.onClearCompleted}
              />) : null}
          </span>
          
        </div>
        );
    }
}
export default TodoList;




/*
if (todos.length === 0) {
                  return <NoDataView/>;
        }
        return todoStore.filteredTodos.map((todo) => (
            <Todos
        todo={todo}
        key={todo.title}
        onRemoveTodo={todoStore.onRemoveTodo}
        onCompletedTodo={todo.onCompletedTodo}
      />
        ));*/
