import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import Home from "./components/Home/index";
import SignInPage from "./EcommerceApp/Authentication/Components/SignIn/index";
import ecommerceStores from "./components/common/Stores/index";
import ProductsPage from "./EcommerceApp/Products/Components/ProductsPage/index";
import Stores from "./components/common/Stores/index";

class App extends React.Component {
  render() {
    return (
      <Provider {...Stores} {...ecommerceStores}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route exact path="/SignIn" component={SignInPage} />
              <Route exact path="/ProductsPage" component={ProductsPage} />
              <Route exact path="/" component={Home} />
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
              <Route path="/grid-game">
                <GridMemoryGame />
              </Route> 
              <Route path="/TodoMobx">
                <TodoApp />
               </Route> 
              <Route path="/TodoMobx">
                <TodoApp />
              </Route>*/
  // import HomePage from "./components/HomePage";
  // import Page1 from "./components/Page1";
  // import EmojiGame from "./components/Game/EmojiGame";
  // import EventApp from "./components/EventApp/EventsApp";
  //import GridMemoryGame from "./components/GridGame/GridMemoryGame/GridMemoryGame";
  //import TodoApp from "./components/TodoMobx/TodoApp";
}
