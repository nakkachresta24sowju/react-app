/* global fetch */
import React from 'react';
import { Countries } from './Countries./index.js';
import { Header } from './Header.js';
import { CountriesFilterBar } from './CountriesFilterBar';
import './CountriesDashboardApp.css';

class CountriesDashboardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], searchText: ' ', selectedRegion: 'All', regionOptions: [] };
  }

  componentDidMount = () => {
    this.getCountries();
  }

  getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then((jsonData) => {
        this.getRegionOptions(jsonData);
        this.setState({ countries: jsonData });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getRegionOptions = (data) => {
    this.setState({ regionOptions: ([...new Set(data.map(({ region }) => region))]) });
  }
  onChangeSearchText = (text) => {
    this.setState({ searchText: text });
  }
  onChangeSelectedRegion = (region) => {
    this.setState({ selectedRegion: region });
  }

  filterCountriesBySearchText = () => {
    const txt = this.state.searchText;
    let searchres = this.state.countries;
    if (txt !== " ")
      searchres = this.state.countries.filter(ec => ec.name.toLowerCase().search(txt.toLowerCase()) !== -1);
    return searchres;
  }

  filterCountriesByRegion = () => {
    const reg = this.state.selectedRegion;
    let optionres = this.state.countries;
    if (reg !== "All") {
      optionres = this.state.countries.filter(er => er.region === reg);
    }
    return optionres;
  }
  displayCountries = () => {
    let countriesBySelectedRegion = this.filterCountriesByRegion();
    let countriesBySearchText = this.filterCountriesBySearchText();
    console.log("reg", countriesBySelectedRegion);
    let wantedCountries = countriesBySelectedRegion.filter((country) =>
      countriesBySearchText.includes(country)
    );
    return wantedCountries;

  }

  render() {
    const displayCountries = this.displayCountries();
    console.log("displayCountries", displayCountries);
    return (<div>
      <Header />
      <CountriesFilterBar selectedRegion={this.state.selectedRegion} regionOptions={this.state.regionOptions} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText} />
      <Countries allcountries={displayCountries} />
    </div>);
  }
}


export { CountriesDashboardApp };
