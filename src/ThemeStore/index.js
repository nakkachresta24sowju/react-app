import { MdCallToAction } from "react-icons/md";

class ThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = "light-theme"
    }
    //@action.bound
    setCurrentTheme() {
        if (this.selectedTheme === "light-theme") {
            this.setState({ selectedTheme: "dark-theme" });
        }
        else {
            this.setState({ selectedTheme: "light-theme" });
        }
    }
}
const themeStore = new ThemeStore()
export default themeStore