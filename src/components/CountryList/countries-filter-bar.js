import React from 'react';
import './countries-filter-bar.css';
import { SearchCountry } from './search-country.js';
import { SelectRegion } from './select-region.js';

class CountriesFilterBar extends React.Component {
 render() {
  return (<div className={(this.props.selectedTheme==="dark-theme")?"dark-theme-one country-filter":"light-theme-one country-filter"}>
  <SearchCountry onChangeSearchText={this.props.onChangeSearchText}/>
  <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion} regionOptions={this.props.regionOptions}/>
  </div>);
 }
}
export { CountriesFilterBar };
