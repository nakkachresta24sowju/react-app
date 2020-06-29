import React from 'react'
import { Redirect, Link } from 'react-router-dom'

class Home extends React.Component {
   gotoGridScreenIfLoggedIn = () => {
      return <Redirect to={{ pathname: '/SignIn' }} />
   }

   render() {
      //return this.gotoGridScreenIfLoggedIn();
      return (
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to='/EmojiGame'>EmojiGame</Link>
                  </li>
                  <li>
                     <Link to='/FormComponents'>FormComponents</Link>
                  </li>
                  <li>
                     <Link to='/CarsList'>CarsList</Link>
                  </li>
                  <li>
                     <Link to='/Homepage'>HomePage</Link>
                  </li>
                  <li>
                     <Link to='/SignIn'>EcommerceApp</Link>
                  </li>
                  <li>
                     <Link to='/CountriesDashboardApp '>CountryList</Link>
                  </li>
                  <li>
                     <Link to='/PracticeAdvancedComponents'>
                        PracticeAdvancedComponents
                     </Link>
                  </li>
                  <li>
                     <Link to='/grid-game'>GridMemoryGame</Link>
                  </li>
                  <li>
                     <Link to='/CommonComponents'>CommonComponents</Link>
                  </li>
               </ul>
            </nav>
         </div>
      )
   }
}
export default Home

/*

 return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Page1">Page 1</Link>
            </li>
            <li>
              <li>
            <Link to="/grid-game">GridMemoryGame</Link>
          </li>
            </li>
            <li>
              <Link to="/TodoMobx">Todo Mobx</Link>
            </li>
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
              <Link to="/TodoList">TodoList</Link>
            </li>
            <li>
              <Link to="/TodoMobx">Todo Mobx</Link>
            </li>
            <li>
              <Link to="/SignIn">SignIn</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
<nav>
        <ul>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
          <li>
            <Link to="/ProductsPage">ProductPage</Link>
          </li>
          <li>
            <Link to="/EmojiGame">EmojiGame</Link>
          </li>
        </ul>
        <li>
              <Link to="/Loginpage">LoginPage</Link>
            </li>
      </nav>

    
  
*/
