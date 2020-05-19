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
          <div className="header-text">Where in the world?</div>
          <div className="theme-btn">
            <span className="Moon">
              <FaRegMoon />
            </span>
            <button
              className={
                themeStore.selectedTheme === "dark-theme"
                  ? "header-button-dark "
                  : "header-button-light"
              }
              onClick={themeStore.onChangeTheme()}
            >
              {themeStore.selectedTheme === "dark-theme"
                ? "DarkMode "
                : "LightMode "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { Header };
