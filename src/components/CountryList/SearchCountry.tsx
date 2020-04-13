import React from 'react';
import { MdSearch } from "react-icons/md";
import './SearchCountry.css'
function SearchCountry(props) {
  const onChangeText = (event) => {
    if (event.keyCode === 13) {
      props.onChangeSearchText(event.target.value);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (<div>
    <form className="form-input" onSubmit={handleSubmit}>
      <span className="search-icon"><MdSearch /><input className={(props.selectedTheme === "dark-theme") ? "dark-theme-one search-input" : "light-theme-one search-input"}
        type="text" placeholder="Search for a country..." onKeyDown={onChangeText} />
      </span></form>
  </div>);
}

export { SearchCountry };
