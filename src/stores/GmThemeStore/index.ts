import { observable } from 'mobx';

class GmThemeStore {
    @observable selectedTheme: string;

    constructor() {
        this.selectedTheme = "light-theme";
    }

    onChangeSelecetdTheme = () => {
        if (this.selectedTheme === "light-theme") {
            this.selectedTheme = "dark-theme";
        }
        else {
            this.selectedTheme = "light-theme";
        }
    }
}
const gmThemeStore = new GmThemeStore()
export { gmThemeStore as default, GmThemeStore };
