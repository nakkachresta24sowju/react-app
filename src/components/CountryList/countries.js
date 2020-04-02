import React from 'react';
import './countries.css';
import CountryCard from './country-card.js';
class Countries extends React.Component {
 renderCountries = () => {
  return this.props.allcountries.map(countryDetails => <CountryCard key={countryDetails.name} eachcountry={countryDetails} selectedTheme = {this.props.selectedTheme} onChangeTheme = {this.props.onChangeTheme } />);
 }
 render() {
  return (<div className = {(this.props.selectedTheme ==="dark-theme")?"dark-theme-one " : "light-theme-one" }>
   <div className="countries-cards">{this.renderCountries()}</div>
   </div>);
 }
}

export { Countries };
