import React from 'react';
import { withRouter } from 'react-router-dom';
import './CountryCard.css';
function CountryCard(props) {
  const navigateToCountryDetailsPage = () => {
    let { history } = props;
    history.push({ pathname: `/CountriesDashboardApp/:${(props.eachcountry.alpha3code)}`, state: [props.eachcountry.name] });
  }
  return (
    <div className="cards" onClick={navigateToCountryDetailsPage}>
      <div className="card-header">
        <img className="flag-of-country" src={props.eachcountry.flag} alt="couytryflags" />
      </div>
      <div className={(props.selectedTheme === "dark-theme") ? "dark-theme" : "light-theme"}>
        <div className="card-content">
          <div><b>{props.eachcountry.name}</b></div>
          <div><b>Population:</b>{props.eachcountry.population}</div>
          <div><b>Region:</b>{props.eachcountry.region}</div>
          <div><b>Capital:</b>{props.eachcountry.capital}</div>
        </div>
      </div>
    </div>);
}

export default withRouter(CountryCard);


/*div className={(this.props.selectedtheme==="dark-theme")?"dark-theme-one":"light-theme-one"}>*/
