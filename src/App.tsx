import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import Home from "./components/Home";
import { CarsList } from "./components/CarsList";
import EmojiGame from "./components/Game/EmojiGame";
import { FormComponents } from "./components/FormComponents/form-components";
//import UserPage from "./components/UsersPage";
import HomePage from "./components/HomePage";
import { CountriesDashboardApp } from "./components/CountryList/CountriesDashboardApp";
import CountryDetails from "./components/CountryList/CountryDetails";
// import Page1 from "./components/Page1";
import SignInRoute from "./EcommerceApp/Authentication/Routes/SignInRoute";
import ecommerceStores from "./components/common/Stores/index";
import { ProductPageRoute } from "./EcommerceApp/Products/Routes/ProductPageRoute";
import Stores from "./components/common/Stores";
//import authenticationRoutes from "../src/EcommerceApp/Authentication/Routes/index";
class App extends React.Component {
  render() {
    return (
      <Provider {...Stores} {...ecommerceStores}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route path="/EmojiGame">
                <EmojiGame />
              </Route>
              <Route path="/FormComponents">
                <FormComponents />
              </Route>
              <Route path="/HomePage">
                <HomePage />
              </Route>
              <Route path="/CarsList">
                <CarsList />
              </Route>
              <Route exact path="/SignIn" component={SignInRoute} />
              <Route exact path="/ProductsPage" component={ProductPageRoute} />
              <Route exact path="/CountriesDashboardApp ">
                <CountriesDashboardApp />
              </Route>

              <Route path="/CountriesDashboardApp/CountryDetails/:id">
                <CountryDetails />
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

{
  /* <Route path="/Page1">
                <Page1 />
              </Route>
              <Route path="/Page1">
              <Page1 />
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
              <Route path="/grid-game">
                <GridMemoryGame />
              </Route> 
              <Route path="/TodoMobx">
                <TodoApp />
                <Route path="/TodoList">
              <TodoList />
            </Route>
            <Route path="/TodoMobx">
              <TodoApp />
            </Route>
               </Route> 
               <Route path="/LoginPage">
              <LoginPage />
            </Route>
              <Route path="/TodoMobx">
                <TodoApp />
</Route>*/
  //import TodoList from "./components/TodoList/TodoList";
  // import HomePage from "./components/HomePage";
  // import Page1 from "./components/Page1";
  //import LoginPage from "./components/LoginPage";
  // import EventApp from "./components/EventApp/EventsApp";
  //import GridMemoryGame from "./components/GridGame/GridMemoryGame/GridMemoryGame";
  //import TodoApp from "./components/TodoMobx/TodoApp";
}

{
  /* <Route exact path="/SignIn" component={SignInRoute} />
              <Route exact path="/ProductsPage" component={ProductPageRoute} />
              <Route exact path="/" component={Home} /> 


        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route path="/EmojiGame">
                <EmojiGame />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>           */
}
