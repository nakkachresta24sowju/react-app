import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Home extends React.Component {
      gotoGridScreenIfLoggedIn = () => {
            return (
                  <Redirect to={{ pathname:'/LoginPage',
      }}
      />
            )
      }
      render() {
            if (true) {
                  return this.gotoGridScreenIfLoggedIn()
            }
      }


}
export default Home;



//       return (<div><nav>
//       <ul>
//         <li>
//           <Link to="/EmojiGame">EmojiGame</Link>
//         </li>
//         <li>
//           <Link to="/TodoList">Todo List</Link>
//         </li>
//         <li>
//         <Link to="/UserPage">UserPage</Link>
//         </li>
//         <li>
//         <Link to="/LoginPage">LoginPage</Link>
//         </li>
//       </ul>
//     </nav></div>)
