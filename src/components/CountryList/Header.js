import React from "react";
import "./Header.css";
import { FaRegMoon } from "react-icons/fa";

import themeStore from "../../stores/ThemeStore";

class Header extends React.Component {
  // onChangeTheme = () => {
  //   this.props.themeStore.selectedTheme();
  // };
  render() {
    console.log(themeStore, 55);
    return (
      <div
        className={
          themeStore.selectedTheme === "light-theme"
            ? "light-theme"
            : "dark-theme"
        }
      >
        <div className="header">
          <span className="header-text">Where in the world?</span>
          <button
            className={
              themeStore.selectedTheme === "dark-theme"
                ? "header-button-dark theme-btn"
                : "header-button-light theme-btn"
            }
            onClick={themeStore.onChangeTheme()}
          >
            <FaRegMoon />

            {themeStore.selectedTheme === "dark-theme"
              ? "DarkMode "
              : "LightMode "}
          </button>
        </div>
      </div>
    );
  }
}

export { Header };
