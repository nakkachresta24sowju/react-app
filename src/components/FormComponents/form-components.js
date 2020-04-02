import React from "react";
import { Greetings } from './greetings.js';
import { FavouriteDessert } from './favourite-dessert.js';
import { VisitedCities } from './visited-cities.js';
import { YourState } from './your-state.js';
import { DisableOrEnable } from './disabled-enabled.js';
//import { withRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

function FormComponents() {
  // navigateBack = () => {
  //  const { history } = this.props;
  //  history.goBack();
  //onClick={this.navigateBack}
  // }
  return (
    <Router>
      <div>
      <div className="greet"><button className="svgimg" ><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></button>Form Components</div>
        <nav>
          <ul>
            <li>
              <Link to="/greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/favourite-dessert">Favourite Dessert</Link>
            </li>
             <li>
              <Link to="/visited-cities">Visited Cities</Link>
            </li>
              <li>
              <Link to="/your-state">Your State</Link>
            </li>
              <li>
              <Link to="/disable-button">Disable Button</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/greetings">
            <Greetings />
          </Route>
          <Route path="/favourite-dessert">
            <FavouriteDessert dessertList={["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]}/>
          </Route>
          <Route path="/visited-cities">
            <VisitedCities cityList={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
          </Route>
          <Route path="/your-state">
            <YourState stateList= {["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
          </Route>
         <Route path="/disable-button">
            <DisableOrEnable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export { FormComponents };
