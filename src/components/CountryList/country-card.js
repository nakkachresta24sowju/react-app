import React from 'react';
import { withRouter } from 'react-router-dom';
import './country-card.css';

class CountryCard extends React.Component {

 navigateToCountryDetailsPage = () => {
  let { history } = this.props;
  history.push({ pathname: `/countries-dashboard-app/:${(this.props.eachcountry.alpha3code)}`, state: [this.props.eachcountry.name] });
 }

 render() {
  return (<div className="cards" onClick={this.navigateToCountryDetailsPage}>
  <div className="card-header">
  <img className="flag-of-country" src={this.props.eachcountry.flag} alt="couytryflags"/>
  </div>
  <div className = {(this.props.selectedTheme ==="dark-theme")?"dark-theme" : "light-theme" }>
  <div className="card-content">
  <div><b>{this.props.eachcountry.name}</b></div>
  <div><b>Population:</b>{this.props.eachcountry.population}</div>
  <div><b>Region:</b>{this.props.eachcountry.region}</div>
  <div><b>Capital:</b>{this.props.eachcountry.capital}</div>
  </div>
  </div>
  </div>);
 }
}

export default withRouter(CountryCard);


/*div className={(this.props.selectedtheme==="dark-theme")?"dark-theme-one":"light-theme-one"}>*/
