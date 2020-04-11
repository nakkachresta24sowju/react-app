
import { observable } from 'mobx';
class ThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = "light-theme"
    }
    //@action.bound
    onChangeTheme = () => {
        if (this.selectedTheme === "light-theme") {
            this.selectedTheme = "dark-theme";
        }
        else {
            this.selectedTheme = "light-theme";
        }
    }
    getCurrentTheme() {
        return this.selectedTheme;
    }
}
const themeStore = new ThemeStore()
export default themeStore