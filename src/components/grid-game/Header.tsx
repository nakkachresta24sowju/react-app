import React from 'react';
import { observer } from 'mobx-react';
import './Header.css';
//import GridMemoryGame from "./GridMemoryGame";

type Props = {
    selectedTheme: string
    onChangeSelectedTheme: Function
    level: number
    topLevel: number
}
@observer
class Header extends React.Component<Props>{
    onChangeSelectedTheme = () => {
        this.props.onChangeSelectedTheme();
    }
    render() {
        const { selectedTheme } = this.props;
        return (<div className={(selectedTheme === "light-theme") ? "light-theme" : "dark-theme"}>
            <div>Top Level:0</div>
            <div><span>Level:0</span><button onClick={this.onChangeSelectedTheme} >Mode:{(selectedTheme === "light-theme") ? "Light" : "Dark"}</button></div>
        </div>);
    }
}
export default Header;

//className={(gmThemeStore.selectedTheme === "light-theme") ? "light-theme" : "dark-theme"}
//{ ? 'Light Mode' : 'Dark Mode'}
//