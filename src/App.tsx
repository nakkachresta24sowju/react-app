import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from "react-router-dom";


import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import EmojiGame from './components/Game/EmojiGame';
import EventApp from './components/EventApp/EventsApp';


// import CounterApp from "./components/CounterApp";
// import { CarsList } from './components/CarsList/index.js';
// import TodoList from './components/TodoList/TodoList';
// import { FormComponents } from './components/FormComponents/form-components.js';
// import Practice from './components/Practice';
// import TodoApp from './components/TodoMobx/TodoApp';

//import { configure } from 'mobx'


//configure({ enforceActions: true })

class App extends React.Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Page1">Page 1</Link>
              </li>
              <li>
                <Link to="/EmojiGame">EmojiGame</Link>
              </li>
              <li>
                <Link to="/Homepage">HomePage</Link>
              </li>
              <li>
                <Link to="/EventsApp">EventApp</Link>
              </li>
            </ul>
          </nav>
          < Switch >
            <Route path="/Page1">
              <Page1 />
            </Route>
            <Route path="/EmojiGame" >
              <EmojiGame />
            </Route>
            <Route path="/HomePage">
              <HomePage />
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





/* <li>
//                 <Link to="/CarsList">CarsList</Link>
//               </li>
//               <li>
//                 <Link to="/TodoList">TodoList</Link>
//               </li>
//               <li>
//                 <Link to="/form-components">FormComponents</Link>
//               </li>
//               <li>
//                 <Link to="/CountriesDashboardApp">CountriesDashboardApp</Link>
//               </li>
//
//               <li>
//
//               </li>
//               <li>
//                 <Link to="/HomePage">HomePage</Link>
//               </li>
//               <li>
//                 <Link to="/CounterApp">CounterApp</Link>
//               </li>
//               <li>
//               <Link to="/Practice">Practice</Link>
//             </li>
//             <li>
//
//             </li>
               <li>
               <Route path="/TodoApp">
              <TodoApp />
            </Route>
                <Link to="/TodoApp">TodoApp</Link>
              </li>
//
//            <Route path="/CarsList">
//              <CarsList />
//            </Route>
//            <Route path="/TodoList">
//              <TodoList />
//            </Route>
//            <Route path="/form-components">
//              <FormComponents />
//            </Route>
//            <Route exact path="/CountriesDashboardApp">
//              <CountriesDashboardApp />
//            </Route>
//            <Route exact path="/CountriesDashboardApp/:country">
//              <Header />
//              <CountryDetails />
//            </Route>
//
//
//            <Route path="/CounterApp">
//              <CounterApp />
//            </Route>
//            <Route path="/Practice">
//              <Practice />
//            </Route>
//              */