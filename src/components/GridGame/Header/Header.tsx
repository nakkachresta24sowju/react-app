import React from "react";
import { observer } from "mobx-react";
import "./Header.css";

type Props = {
  selectedTheme: string;
  onChangeSelectedTheme: Function;
  level: number;
  topLevel: number;
};
@observer
class Header extends React.Component<Props> {
  onChangeSelectedTheme = () => {
    const { onChangeSelectedTheme } = this.props;
    onChangeSelectedTheme();
  };
  render() {
    const { selectedTheme, level, topLevel } = this.props;
    return (
      <div
        className={
          selectedTheme === "light-theme"
            ? "light-theme  header-container"
            : "dark-theme  header-container"
        }
      >
        <div className="toplevel">Top Level:{topLevel}</div>
        <div className="level-mode">
          <span>Level:{level}</span>
          <button
            className={selectedTheme === "light-theme" ? "Light" : "Dark"}
            onClick={this.onChangeSelectedTheme}
          >
            Mode:{selectedTheme === "light-theme" ? "Light " : "Dark"}
          </button>
        </div>
      </div>
    );
  }
}
export default Header;
