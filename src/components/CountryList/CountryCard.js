import React from 'react'
import { withRouter } from 'react-router-dom'
import './CountryCard.css'
function CountryCard(props) {
   const navigateToCountryDetailsPage = () => {
      let { history } = props
      history.push({
         pathname: `/CountriesDashboardApp/CountryDetails/${props.eachcountry.alpha3Code}`,
         state: [props.eachcountry.name]
      })
   }
   return (
      <div className='cards' onClick={navigateToCountryDetailsPage}>
         <div className='card-header'>
            <img
               className='flag-of-country'
               src={props.eachcountry.flag}
               alt='couytryflag'
            />
         </div>
         <div>
            <div className='card-content'>
               <div>
                  <b>{props.eachcountry.name}</b>
               </div>
               <div>
                  <b>Population:</b>
                  {props.eachcountry.population}
               </div>
               <div>
                  <b>Region:</b>
                  {props.eachcountry.region}
               </div>
               <div>
                  <b>Capital:</b>
                  {props.eachcountry.capital}
               </div>
            </div>
         </div>
      </div>
   )
}

export default withRouter(CountryCard)

/*div className={(this.props.selectedtheme==="dark-theme")?"dark-theme-one":"light-theme-one"}>
className={this.props.isThemeChanged ? 'dark-theme' : 'light-theme'}
*/
