import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import EmojiGame from "./components/Game/EmojiGame";
import EventApp from "./components/EventApp/EventsApp";
import GridMemoryGame from "./components/GridGame/GridMemoryGame/GridMemoryGame";
import TodoApp from "./components/TodoMobx/TodoApp";
import Home from "./components/Home";
import SignIn from "./EcommerceApp/Authentication/Components/SignIn";
import AuthStore from "./EcommerceApp/Authentication/Stores/AuthStore/index";
import ProductStore from "./EcommerceApp/Products/Stores/ProductStore/index";
import ProductsPage from "./EcommerceApp/Products/Components/ProductsPage";
import Stores from "./components/common/Stores/index";
class App extends React.Component {
  render() {
    return (
      <Provider {...Stores}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route path="/Page1">
                <Page1 />
              </Route>
              <Route path="/EmojiGame">
                <EmojiGame />
              </Route>
              <Route path="/HomePage">
                <HomePage />
              </Route>
              <Route path="/EventsApp">
                <EventApp />
              </Route>
              <Route path="/grid-game">
                <GridMemoryGame />
              </Route>
              <Route path="/TodoMobx">
                <TodoApp />
              </Route>
              <Route path="/SignIn">
                <SignIn />
              </Route>
              <Route path="/ProductsPage">
                <ProductsPage />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

/* <li>

//                 <Link to="/CountriesDashboardApp">CountriesDashboardApp</Link>
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
/*

<li>
                <Link to="/UserPage">UserPage</Link>
              </li>
              <Route exact path="/UserPage" component={UserPage}></Route>
             //import UserPage from "./components/UsersPage";
//import TodoList from "./components/TodoList/TodoList";
// import CounterApp from "./components/CounterApp";
// import { CarsList } from './components/CarsList/index.js';
// import { FormComponents } from './components/FormComponents/form-components.js';
// import Practice from './components/Practice';

//import { configure } from 'mobx'

//configure({ enforceActions: true })
 
              
              
              */
