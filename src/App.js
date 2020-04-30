import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'mobx-react'
import Stores from './stores/index';
import TodoList from "./components/TodoList/TodoList";
//import HomePage from "./components/HomePage";
//import Page1 from "./components/Page1";
import EmojiGame from "./components/Game/EmojiGame";
//import EventApp from "./components/EventApp/EventsApp";
//import GridMemoryGame from "./components/GridGame/GridMemoryGame/GridMemoryGame";
//import TodoApp from "./components/TodoMobx/TodoApp";
import UserPage from "./components/UsersPage";
//import { CarsList } from './components/CarsList/index';
//import { FormComponents } from './components/FormComponents/form-components';
//import CounterApp from "./components/CounterApp";
//import Practice from './components/Practice';
import Home from './components/Home';
import LoginPage from './components/LoginPage';




class App extends React.Component {
  render() {
    return (
      <Provider {...Stores} >
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/EmojiGame">
              <EmojiGame />
              </Route>
            <Route path="/TodoList">
              <TodoList />
            </Route>
            <Route path="/LoginPage">
              <LoginPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route exact path="/UserPage" component={UserPage}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}
export default App;



/*
<li>
                <Link to="/Homepage">HomePage</Link>
              </li>
              <li>
                <Link to="/EventsApp">EventApp</Link>
              </li>
              <li>
                <Link to="/grid-game">GridMemoryGame</Link>
              </li>
              <li>
              <li>
                <Link to="/Page1">Page 1</Link>
              </li>   
              </Route>
            <Route path="/HomePage">
              <HomePage />
            </Route>
            <Route path="/EventsApp">
              <EventApp />
            </Route>
            <Route path="/TodoMobx">
              <TodoApp />
            </Route>
            <Route path="/Page1">
              <Page1 />
            </Route>
            <Route path="/grid-game">
              <GridMemoryGame />
            </Route>
            <li>
                <Link to="/TodoMobx">Todo Mobx</Link>
              </li>
              
              
              // <nav>
          //   <ul>
          //     <li>
          //       <Link to="/EmojiGame">EmojiGame</Link>
          //     </li>
          //     <li>
          //       <Link to="/TodoList">Todo List</Link>
          //     </li>
          //     <li>
          //     <Link to="/UserPage">UserPage</Link>
          //     </li>
          //     <li>
          //     <Link to="/LoginPage">LoginPage</Link>
          //     </li>
          //   </ul>
          // </nav>
          */
