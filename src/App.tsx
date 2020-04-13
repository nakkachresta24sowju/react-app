import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

import { CarsList } from './components/CarsList/index';
import TodoList from './components/TodoList/TodoList';
import { FormComponents } from './components/FormComponents/form-components';
import { CountriesDashboardApp } from './components/CountryList/CountriesDashboardApp';
import CountryDetails from './components/CountryList/CountryDetails';
import { Header } from './components/CountryList/Header';
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import EmojiGame from './components/Game/EmojiGame.js';
import CounterApp from "./components/CounterApp";
import Practice from './components/Practice';
import TodoApp from './components/TodoMobx/TodoApp';
import EventApp from './components/EventApp/EventsApp.js'

//import { configure } from 'mobx'


//configure({ enforceActions: true })

class App extends React.Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/CarsList">CarsList</Link>
              </li>
              <li>
                <Link to="/TodoList">TodoList</Link>
              </li>
              <li>
                <Link to="/form-components">FormComponents</Link>
              </li>
              <li>
                <Link to="/CountriesDashboardApp">CountriesDashboardApp</Link>
              </li>
              <li>
                <Link to="/EmojiGame">Game</Link>
              </li>
              <li>
                <Link to="/Page1">Page1</Link>
              </li>
              <li>
                <Link to="/HomePage">HomePage</Link>
              </li>
              <li>
                <Link to="/CounterApp">CounterApp</Link>
              </li>
              <li>
                <Link to="/TodoApp">TodoApp</Link>
              </li>
              <li>
                <Link to="/Practice">Practice</Link>
              </li>
              <li>
                <Link to="/EventsApp">EventApp</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/EmojiGame">
              <EmojiGame />
            </Route>
            <Route path="/CarsList">
              <CarsList />
            </Route>
            <Route path="/TodoList">
              <TodoList />
            </Route>
            <Route path="/form-components">
              <FormComponents />
            </Route>
            <Route exact path="/CountriesDashboardApp">
              <CountriesDashboardApp />
            </Route>
            <Route exact path="/CountriesDashboardApp/:country">
              <Header />
              <CountryDetails />
            </Route>
            <Route path="/Page1">
              <Page1 />
            </Route>
            <Route path="/HomePage">
              <HomePage />
            </Route>
            <Route path="/CounterApp">
              <CounterApp />
            </Route>
            <Route path="/Practice">
              <Practice />
            </Route>
            <Route path="/TodoApp">
              <TodoApp />
            </Route>
            <Route path="/EventsApp">
              <EventApp />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};
export default App;
