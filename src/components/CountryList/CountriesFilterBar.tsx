import React from 'react';

import { observer } from 'mobx-react';

import './CountriesFilterBar.css';
import { SearchCountry } from './SearchCountry.js';
import { SelectRegion } from './SelectRegion.js';


import themeStore from '../../stores/ThemeStore';

@observer
class CountriesFilterBar extends React.Component {
  render() {
    return (
      <div className={(themeStore.selectedTheme === "dark-theme") ? "dark-theme-one country-filter" : "light-theme-one country-filter"}>
        <SearchCountry onChangeSearchText={this.props.onChangeSearchText} />
        <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion} regionOptions={this.props.regionOptions} />
      </div>
    );
  }
};
export { CountriesFilterBar };


//class CountriesFilterBar extends React.Component