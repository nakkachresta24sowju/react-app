/* global fetch */
import React from 'react'
import Countries from './Countries'
import { Header } from './Header'
import { CountriesFilterBar } from './CountriesFilterBar'
import './CountriesDashboardApp.css'
//import themeStore from '../../stores/ThemeMode'

class CountriesDashboardApp extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         countries: [],
         searchText: ' ',
         selectedRegion: 'All',
         regionOptions: []
      }
   }

   componentDidMount = () => {
      this.getCountries()
   }

   getCountries = () => {
      fetch('https://restcountries.eu/rest/v2/all')
         .then(response => response.json())
         .then(jsonData => {
            this.getRegionOptions(jsonData)
            this.setState({ countries: jsonData })
         })
         .catch(error => {
            console.error(error)
         })
   }

   getRegionOptions = data => {
      this.setState({
         regionOptions: [...new Set(data.map(({ region }) => region))]
      })
   }
   onChangeSearchText = text => {
      this.setState({ searchText: text })
   }
   onChangeSelectedRegion = region => {
      this.setState({ selectedRegion: region })
   }

   filterCountriesBySearchText = () => {
      const txt = this.state.searchText
      let searchres = this.state.countries
      if (txt !== ' ')
         searchres = this.state.countries.filter(
            ec => ec.name.toLowerCase().search(txt.toLowerCase()) !== -1
         )
      return searchres
   }

   filterCountriesByRegion = () => {
      const reg = this.state.selectedRegion
      let optionres = this.state.countries
      if (reg !== 'All') {
         optionres = this.state.countries.filter(er => er.region === reg)
      }
      return optionres
   }
   displayCountries = () => {
      let countriesBySelectedRegion = this.filterCountriesByRegion()
      let countriesBySearchText = this.filterCountriesBySearchText()
      let wantedCountries = countriesBySelectedRegion.filter(country =>
         countriesBySearchText.includes(country)
      )
      return wantedCountries
   }

   render() {
      //console.log(themeStore, 88)
      const displayCountries = this.displayCountries()
      return (
         <div
         // className={
         //    themeStore.isThemeChanged ? 'dark-theme-one ' : 'light-theme-one'
         // }
         >
            <Header
            // isThemeChanged={themeStore.isThemeChanged}
            // onChangeTheme={themeStore.onChangeTheme()}
            />
            <CountriesFilterBar
               selectedRegion={this.state.selectedRegion}
               regionOptions={this.state.regionOptions}
               onChangeSelectedRegion={this.onChangeSelectedRegion}
               onChangeSearchText={this.onChangeSearchText}
               // isThemeChanged={themeStore.isThemeChanged}
               // onChangeTheme={themeStore.onChangeTheme()}
            />
            <Countries
               allcountries={displayCountries}
               // isThemeChanged={themeStore.isThemeChanged}
               // onChangeTheme={themeStore.onChangeTheme()}
            />
         </div>
      )
   }
}

export default CountriesDashboardApp

//
