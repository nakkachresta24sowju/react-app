import React from 'react';
import './search-country.css'
import { MdSearch } from "react-icons/md";
class SearchCountry extends React.Component {

 onChangeText = (event) => {
  if (event.keyCode === 13) {
   this.props.onChangeSearchText(event.target.value);
  }
 }
 handleSubmit = (event) => {
  event.preventDefault();
 }
 render() {
  return (<div>
       <form className="form-input" onSubmit={this.handleSubmit}>
     <span className="search-icon"><MdSearch/><input className={(this.props.selectedTheme==="dark-theme")?"dark-theme-one search-input":"light-theme-one search-input"}
  type="text"  placeholder="Search for a country..." onKeyDown={this.onChangeText}/>
</span></form>
    </div>);
 }
}

export { SearchCountry };
