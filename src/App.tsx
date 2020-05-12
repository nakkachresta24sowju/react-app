import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import Home from "./components/Home/index";
import SignInRoute from "./EcommerceApp/Authentication/Routes/SignInRoute";
import ecommerceStores from "./components/common/Stores/index";
import { ProductPageRoute } from "./EcommerceApp/Products/Routes/ProductPageRoute";
import Stores from "./components/common/Stores/index";
//import authenticationRoutes from "../src/EcommerceApp/Authentication/Routes/index";
class App extends React.Component {
  render() {
    return (
      <Provider {...Stores} {...ecommerceStores}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route exact path="/SignIn" component={SignInRoute} />
              <Route exact path="/ProductsPage" component={ProductPageRoute} />
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
