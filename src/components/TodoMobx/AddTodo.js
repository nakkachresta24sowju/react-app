import React from 'react';


import { observer } from 'mobx-react';
import { action } from 'mobx';
import { observable } from 'mobx';

@observer
class AddTodo extends React.Component {

    @observable todoTitle;

    @action.bound
    onAddTodo(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            let text = event.target.value;
            this.props.onAddTodo(text);
            event.target.value = ""
        }
    }

    // @action.bound
    // onChangeInput() {

    // }


    render() {
        return (<div>
            <div className="todos">todos</div>
            <input type="text" id="item" onKeyPress={this.onAddTodo} />
        </div>);
    }


}
export default AddTodo;








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