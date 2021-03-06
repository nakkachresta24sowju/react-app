import React from 'react'
/* global fetch */
import { withRouter } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { Header } from './Header'
import './CountryDetails.css'

class CountryDetails extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         givenCountriesList: [],
         navigatedCountry: [],
         isThemeChanged: false
      }
   }
   componentDidMount = () => {
      fetch('https://restcountries.eu/rest/v2/all')
         .then(response => response.json())
         .then(jsonData => {
            this.setState({ givenCountriesList: jsonData })
            this.setState({
               navigatedCountry: this.state.givenCountriesList.filter(
                  cn => cn.name === this.props.location.state[0]
               )
            })
         })
         .catch(error => {
            console.error(error)
         })
   }

   onNavigateback = () => {
      window.history.back()
   }

   renderList = () => {
      if (this.state.navigatedCountry.length > 0) {
         return (
            <div>
               <Header />
               <div className='back-button'>
                  <button
                     className='button-btn'
                     // className={
                     //    this.isThemeChanged
                     //       ? 'light-theme button-btn'
                     //       : 'dark-theme button-btn'
                     // }
                     onClick={this.onNavigateback}
                  >
                     <MdArrowBack />
                     Back
                  </button>
               </div>
               <div
                  className='navigation'
                  // className={
                  //    this.isThemeChanged
                  //       ? ' light-theme-one  navigation'
                  //       : ' dark-theme-one navigation'
                  // }
               >
                  <div>
                     <img
                        className='navigated-country-flag'
                        src={this.state.navigatedCountry[0].flag}
                        alt='couytryflags'
                     />
                  </div>
                  <div className='navigated-country'>
                     <p>
                        <b>{this.state.navigatedCountry[0].name}</b>
                     </p>
                     <div>
                        <span className='native-name'>
                           <b>Native Name:</b>
                           {this.state.navigatedCountry[0].nativeName}
                        </span>
                        <span className='top-level-domain'>
                           <b>Top Level Domain:</b>
                           {this.state.navigatedCountry[0].topLevelDomain[0]}
                        </span>
                     </div>
                     <div>
                        <span className='population'>
                           <b>Population:</b>
                           {this.state.navigatedCountry[0].population}
                        </span>
                        <span className='currency'>
                           <b>Currencies:</b>
                           {this.state.navigatedCountry[0].currencies[0].name}
                        </span>
                     </div>
                     <div>
                        <span className='language'>
                           <b>Languages:</b>
                           {this.state.navigatedCountry[0].languages.map(
                              e => e.name
                           )}
                        </span>
                        <span className='region'>
                           <b>Region:</b>
                           {this.state.navigatedCountry[0].region}
                        </span>
                     </div>
                     <div>
                        <b>Sub Region:</b>
                        {this.state.navigatedCountry[0].subregion}
                     </div>
                     <div>
                        <b>Capital:</b>
                        {this.state.navigatedCountry[0].capital}
                     </div>
                     <div>
                        <b>Border Countries:</b>
                        <br />
                        {this.state.navigatedCountry[0].borders.map(c => (
                           <button className='bordercontries' key={c}>
                              {c}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         )
      }
   }
   render() {
      return <div>{this.renderList()}</div>
   }
}
export default withRouter(CountryDetails)

/*
  <div className="navigated-country-flag">
   <div><img src={this.state.navigatedCountry.flag} alt="couytryflags"/></div>
  <div className="navigated-country">
  <p>{this.state.navigatedCountry.name}</p>
  <div><b>Native Name:</b>{this.state.navigatedCountry.population}</div>
  <div><b>Population:</b>{this.state.navigatedCountry.population}</div>
  <div><b>Region:</b>{this.state.navigatedCountry.population}</div>
  <div><b>Sub Region:</b>{this.state.navigatedCountry.region}</div>
  <div><b>Capital:</b>{this.state.navigatedCountry.capital}</div>
  <div><b>Top Level Domain:</b>{this.state.navigatedCountry.capital}</div>
  <div><b>Currencies:</b>{this.state.navigatedCountry.capital}</div>
  <div><b>Languages:</b>{this.state.navigatedCountry.capital}</div>
  <div><b>Border Countries:</b>{this.state.navigatedCountry.borders}</div>
  </div>
  </div>);
  className={
            themeStore.selectedTheme === "dark-theme"
              ? "dark-theme-one"
              : "light-theme-one"
          }
          



          <div className="back-button">
            <button
              className={
                themeStore.selectedTheme === "dark-theme"
                  ? "dark-theme button-btn"
                  : "light-theme button-btn"
              }
              onClick={this.onNavigateback}
            >

            <div>
                <b>Border Countries:</b>
                <br />
                {this.state.navigatedCountry[0].borders.map((c) => (
                  <button
                    className={
                      themeStore.selectedTheme === "dark-theme"
                        ? "dark-theme button-btn"
                        : "light-theme button-btn"
                    }
                    key={c}
                  >
                    {c}
                  </button>
                ))}
              </div>

              className={
                     this.isThemeChanged
                        ? 'light-theme-one back-button'
                        : ' dark-theme-one back-button'
                  }
 */
