import React from 'react';
import './CountriesFilterBar.css';
import { SearchCountry } from './SearchCountry.js';
import { SelectRegion } from './SelectRegion.js';

function CountriesFilterBar (props) {
  return (
    <div className={(props.selectedTheme==="dark-theme")?"dark-theme-one country-filter":"light-theme-one country-filter"}>
  <SearchCountry onChangeSearchText={props.onChangeSearchText}/>
  <SelectRegion onChangeSelectedRegion={props.onChangeSelectedRegion} regionOptions={props.regionOptions}/>
  </div>
  );
};
export { CountriesFilterBar };


//class CountriesFilterBar extends React.Component