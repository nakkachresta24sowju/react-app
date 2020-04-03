import React from 'react';
import './Header.css';
import { FaRegMoon } from "react-icons/fa";
function Header(props) {

  return (<div className = {(props.selectedTheme ==="dark-theme")?"dark-theme" : "light-theme" }>
  <div className="header">
   <span className="header-text">Where in the world?</span>
   <button className = {(props.selectedTheme ==="dark-theme")?"header-button-dark" : "header-button-light" }onClick={props.onChangeTheme}><FaRegMoon />{(props.selectedTheme ==="dark-theme")?"DarkMode" :"LightMode"}</button>
   </div>
   </div>);
}

export { Header };
