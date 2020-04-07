import React from "react";
//import { CarsList } from './components/CarsList/index.js';
//import { TodoList } from './components/TodoList/index.js';
//import { FormComponents } from './components/FormComponents/form-components.js';
//import { CountriesDashboardApp } from './components/CountryList/CountriesDashboardApp.js';
//import CountryDetails from './components/CountryList/CountryDetails';
//import { Header } from './components/CountryList/Header.js';
//import {observable} from 'mobx';
//import {observer} from 'mobx-react';
import EmojiGame from './components/Game/EmojiGame.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from "react-router-dom";
//import HomePage from "./components/HomePage";
//import Page1 from "./components/Page1";
import "./App.css";
//@observer(decorator)
class App extends React.Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/EmojiGame">EmojiGame</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/EmojiGame">
              <EmojiGame />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;


/*function FormComponents() {
  return <div>
      <h2>Homessss</h2>
    </div>
}*/

/*import React from 'react';
import { CarsList } from './components/CarsList/index';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit<code>src/App.js</code> and save to reload.
        </p>
      <CarsList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/











/*import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
<<<<<<< HEAD
import CounterPage from "./components/CounterPage";
=======
>>>>>>> 03eac9abdca9a1a6eb5f58a9aadb743926fb1b99
import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      
        <Route exact path="/counter-page">
          <CounterPage />
        </Route>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        </Switch>
    </Router>
  );
};

export default App;*/




/*
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
                <Link to="/HomePage">HomePage</Link>
              </li>
              <li>
                <Link to="/Page1">Page1</Link>
              </li>

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
              <CountriesDashboardApp selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme} />
            </Route>
            <Route exact path="/CountriesDashboardApp/:country">
              <Header selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme} />
              <CountryDetails selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme} />
            </Route>
            <Route path="/Page1">
              <Page1 />
            </Route>
            <Route path="/HomePage">
              <HomePage />
              <Route />


              constructor(props) {
    super(props);
    this.state = { selectedTheme: "light-theme" };
  }
import {observer} from 'mobx-react';
  @observable selectedTheme="light"

  getCurrentTheme = () =>
{
return this.selectedTheme
}

  seCurrentTheme = (theme) =>
{
this.selectedTheme = theme
}

  onChangeTheme = () => {
    if (this.state.selectedTheme === "light-theme") {
      this.setState({ selectedTheme: "dark-theme" });
    }
    else {
      this.setState({ selectedTheme: "light-theme" });
    }
  }
*/