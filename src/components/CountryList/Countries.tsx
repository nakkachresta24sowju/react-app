import React from 'react';
import './Countries.css';
import CountryCard from './CountryCard';
import { observer } from 'mobx-react';


import themeStore from '../../stores/ThemeStore';

@observer
class Countries extends React.Component {
  renderCountries = () => {
    if (this.props.allcountries.length > 0) {
      return this.props.allcountries.map(countryDetails => <CountryCard key={countryDetails.name} eachcountry={countryDetails} selectedTheme={this.props.selectedTheme} onChangeTheme={this.props.onChangeTheme} />);
    }
    else {
      return <div>Countries Not Found</div>;
    }
  }
  render() {
    return (<div className={(themeStore.selectedTheme === "dark-theme") ? "dark-theme-one " : "light-theme-one"}>
      <div className="countries-cards">{this.renderCountries()}</div>
    </div>);
  }
}

export { Countries };
