import React from 'react';
import './index.css';
class Todos extends React.Component {
      constructor(props) {
            super(props);
            console.log("prop", props);
      }

      render() {
            return (<div>
            <ul type="none" className= "givenTodoList">
            <li  className="li">
            <input type="checkbox"  value={this.props.id} className="checkbox" onClick={this.props.checkhandle}/>
            <input type="text"  className="giventodo" value={this.props.id} />
            <button onClick={this.props.removeTodoItem} className="close">x</button>
            </li>
            </ul>
            </div>);
      }
}
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
                  completedTodosListItems: [],
                  activeTodosListItems: []
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
            //console.log(this.state.giventodo);
            //event.preventDefault();
            //console.log("add", this.state.data);
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
                  console.log(index);
                  const { data } = this.state;
                  data[index] = giventodoObject[0];
                  this.setState({ data });
                  //this.setState({data.index : giventodoObject[0]});

            }
            else {
                  giventodoObject = array.filter(e => e.inputValue === event.target.value);
                  giventodoObject[0].checkboxStatus = "uncheck";
                  console.log(giventodoObject);
                  let index = array.indexOf(giventodoObject[0]);
                  console.log(index);
                  const { data } = this.state;
                  data[index] = giventodoObject[0];
                  this.setState({ data });
                  //this.state.data[index] = giventodoObject[0];
                  //this.setState({data.index : giventodoObject[0]});
            }

      }


      allTodos = () => {
            console.log("all");
            let allTodoList = [...this.state.data];
            this.setState({ data: allTodoList });
            console.log(this.state.data);
      }
      activeTodos = () => {
            let active = [...this.state.data].filter(e => (e.checkboxStatus === "uncheck" || e.checkboxStatus === "all"));
            return active.map((todo) =>
                  <Todos  todoObject={this.state.data} checkhandle={this.handlechange}/>
            )
      }
      completedTodos = () => {
            let complete = [...this.state.data].filter(e => e.checkboxStatus === "checked");
            return complete.map((todo) =>
                  <Todos  todoObject={this.state.data} checkhandle={this.handlechange}/>
            )
      }


      /*console.log(complete);
      complete.map(element => this.state.completedTodosListItems.push(element));
      let array2 = [...this.state.completedTodosListItems];
      console.log(array2);
      this.setState({ completedTodosListItems: array2 });  */
      //this.setState({data:completedTodosList});

      clearCompletedTodos = () => {

      }
      render() {

            return (<div>
            <div className="todos">todos</div>
            <input type="text" id="item" onKeyPress={this.addTodos} />
             <div> {
              this.state.data.map((giventodo) =>
                  <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange}/>)
             } </div>
            <div className="footer">
            {this.state.show?
            <div id="counts">
            <span id="countitems">items left</span>&nbsp;
            <button className="all" onClick={this.allTodos}>All</button>&nbsp;
            <button className="active" onClick={this.activeTodos}>Active</button>&nbsp;
            <button className="complete" onClick={this.completedTodos}>Completed</button>&nbsp;&nbsp;
            <button className="clear" onClick={this.clearCompletedTodos}>Clear Completed</button>
            </div>:null
            }
            </div>
            </div>);
      }
}
export { TodoList, Todos };



/*
            let array = this.state.data;
            console.log(array);
            for (let i = 0; i < array.length; i++) {
                  if (idvalue === array.inputValue)
                        array.splice(i, 1);
            }
            this.setState({ data: array });
            
            
            console.log("add", this.state.data);
            
            
                        /*console.log(active);
            active.map(element => this.state.activeTodosListItems.push(element));
            let array1 = [...this.state.activeTodosListItems];
            console.log(array1);
            this.setState({ activeTodosListItems: array1 });*/
//this.setState(activeTodosListItems);
/*
if (event.target.checked === true) {
      giventodoObject.checkboxStatus = "checked";
      giventodoObject = this.state.data.filter(e => e.inputValue != event.target.value);
      //console.log(giventodoObject);
}
else {
      giventodoObject.checkboxStatus = "uncheck";
      let giventodoObject = this.state.data.filter(e => e.inputValue != event.target.value);

      //console.log(giventodoObject);
}
this.setState({ data: giventodoObject });


d < div > {
            this.state.data.map((giventodo) =>
                  <Todos id={giventodo.inputValue} todoObject={this.state.data} removeTodoItem={() => this.removeTodos(giventodo)} checkhandle={this.handlechange}/>)
      } <
      /div>

let activeTodosList = [...this.state.data];
let active = activeTodosList.filter(e => (e.checkboxStatus === "uncheck" || e.checkboxStatus === "all"));
console.log(active);
this.setState(previousstate => ({ activeTodosListItems: previousstate.activeTodosListItems = [...previousstate.activeTodosListItems, active] }));
console.log(this.state.activeTodosListItems);
//this.setState({ activeTodosList});
//this.state.data = activeTodosList;
let completedTodosList = [...this.state.data];
let complete = completedTodosList.filter(e => e.checkboxStatus === "checked");
console.log(complete);
this.setState(previousstate => ({ completedTodosListItems: previousstate.completedTodosListItems = [...previousstate.completedTodosListItems, complete] }));
console.log(this.state.completedTodosListItems);
//this.setState({ completedTodosList});
//this.setState({data:completedTodosList});


var joined = this.state.activeTodosListItems.concat(activeTodosList.filter(e => (e.checkboxStatus === "uncheck" || e.checkboxStatus === "all")));
this.setState({ activeTodosListItems: joined });

//var joined = this.state.completedTodosListItems.concat(complete);
//this.setState({ completedTodosListItems: this.state.completedTodosListItems.concat([complete]) });

//this.setState({ completedTodosListItems: joined });
//this.setState({ completedTodosListItems: [...this.state.completedTodosListItems, ...[complete]] });
//this.setState(previousstate => ({ completedTodosListItems: previousstate.completedTodosListItems = [...previousstate.completedTodosListItems, complete] }));


}*/
