import React from 'react';
import './Countries.css';
import CountryCard from './CountryCard.js';
function Countries(props) {
  const renderCountries = () => {
    if (props.allcountries.length > 0) {
      return props.allcountries.map(countryDetails => <CountryCard key={countryDetails.name} eachcountry={countryDetails} selectedTheme={props.selectedTheme} onChangeTheme={props.onChangeTheme} />);
    }
    else {
      return <div>Countries Not Found</div>;
    }
  }
  return (<div className={(props.selectedTheme === "dark-theme") ? "dark-theme-one " : "light-theme-one"}>
    <div className="countries-cards">{renderCountries()}</div>
  </div>);
}

export { Countries };
