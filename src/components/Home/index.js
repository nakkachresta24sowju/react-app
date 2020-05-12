import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Home extends React.Component {
      // gotoGridScreenIfLoggedIn = () => {
      //       return (
      //             <Redirect to={{ pathname:'/LoginPage',
      // }}
      // />
      //       )
      // }
      // render() {
      //       if (true) {
      //             return this.gotoGridScreenIfLoggedIn()
      //       }
      // }
      render() {
            return (<div>
                  <nav>
                        <ul>
                              <li>
                                    <Link to="/EmojiGame">EmojiGame</Link>
                              </li>
                              <li>
                                    <Link to="/TodoList">Todo List</Link>
                              </li>
                              <li>
                                    <Link to="/UserPage">UserPage</Link>
                              </li>
                              <li>
                                    <Link to="/LoginPage">LoginPage</Link>
                              </li>
                 <li>
              <Link to="/productPage">Products Page</Link>
            </li>
            <li>
              <Link to="/signIn">SignInPage</Link>
            </li>
                        </ul>
                  </nav>
            </div>);

      }
}
export default Home;
