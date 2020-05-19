import React from "react";
import "./CountriesFilterBar.css";
import { SearchCountry } from "./SearchCountry";
import { SelectRegion } from "./SelectRegion";

class CountriesFilterBar extends React.Component {
  render() {
    return (
      <div className="country-filter">
        <SearchCountry onChangeSearchText={this.props.onChangeSearchText} />
        <SelectRegion
          onChangeSelectedRegion={this.props.onChangeSelectedRegion}
          regionOptions={this.props.regionOptions}
        />
      </div>
    );
  }
}
export { CountriesFilterBar };

//class CountriesFilterBar extends React.Component
// {className={
//   themeStore.selectedTheme === "dark-theme"
//     ? "dark-theme-one country-filter"
//     : "light-theme-one country-filter"
// }}
