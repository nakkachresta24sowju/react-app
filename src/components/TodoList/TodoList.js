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
        return todoStore.filteredTodos.map((todo) => (
            <Todos
        todo={todo}
        key={todo.title}
        onRemoveTodo={todoStore.onRemoveTodo}
        onCompletedTodo={todo.onCompletedTodo}
      />
        ));
    };

    onAddTodo = (object) => {
        const { onAddTodo } = todoStore;
        object.map((obj) => onAddTodo(obj.title));
    };

    render() {
        return (
            <div>
          <AddTodo onAddTodo={todoStore.onAddTodo} />
          <span>{this.renderTodos()}</span>
          <span>
            {todoStore.todos.length > 0 ? (
              <TodoFooter
                onChangeSelectedFilter={todoStore.onChangeSelectedFilter}
                activeTodosCount={todoStore.activeTodosCount}
                onClearCompleted={todoStore.onClearCompleted}
              />
            ) : null}
          </span>
        </div>
        );
    }
}
export default TodoList;
