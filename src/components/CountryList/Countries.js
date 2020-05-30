import React from 'react'
import './Countries.css'
import CountryCard from './CountryCard'

class Countries extends React.Component {
   renderCountries = () => {
      if (this.props.allcountries.length > 0) {
         return this.props.allcountries.map(countryDetails => (
            <CountryCard
               key={countryDetails.name}
               eachcountry={countryDetails}
               isThemeChanged={this.props.isThemeChanged}
            />
         ))
      } else {
         return <div>Countries Not Found</div>
      }
   }
   render() {
      return (
         <div
         // className={
         //    this.props.isThemeChanged ? 'dark-theme-one ' : 'light-theme-one'
         // }
         >
            <div className='countries-cards'>{this.renderCountries()}</div>
         </div>
      )
   }
}

export default Countries

{
   // className={
   //   themeStore.selectedTheme === "dark-theme"
   //     ? "dark-theme-one "
   //     : "light-theme-one"
   // }
   // <CountryCard
   //         key={countryDetails.name}
   //         eachcountry={countryDetails}
   //         selectedTheme={this.props.selectedTheme}
   //         onChangeTheme={this.props.onChangeTheme}
   //       />
}
