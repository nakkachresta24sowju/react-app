import React from 'react';
import './header.css';
import { FaRegMoon } from "react-icons/fa";
class Header extends React.Component {
 render() {
  return (<div className = {(this.props.selectedTheme ==="dark-theme")?"dark-theme" : "light-theme" }>
  <div className="header">
   <span className="header-text">Where in the world?</span>
   <button className = {(this.props.selectedTheme ==="dark-theme")?"header-button-dark" : "header-button-light" }onClick={this.props.onChangeTheme}><FaRegMoon />{(this.props.selectedTheme ==="dark-theme")?"DarkMode" :"LightMode"}</button>
   </div>
   </div>);
 }
}

export { Header };
