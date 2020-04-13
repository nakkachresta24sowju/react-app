import React from 'react';

import { FaRegMoon } from "react-icons/fa";
import { observer } from 'mobx-react';

import './Header.css';


import themeStore from '../../stores/ThemeStore';

@observer
class Header extends React.Component {
  render() {
    return (<div className={(themeStore.selectedTheme === "light-theme") ? "light-theme" : "dark-theme"}>
      <div className="header">
        <span className="header-text">Where in the world?</span>
        <button className={(themeStore.selectedTheme === "dark-theme") ? "header-button-dark" : "header-button-light"} onClick={themeStore.onChangeTheme}><FaRegMoon />{(themeStore.getCurrentTheme === "dark-theme") ? "DarkMode" : "LightMode"}</button>
      </div>
    </div>);
  }
}

export { Header };
