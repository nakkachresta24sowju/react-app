import { observable, computed, action } from 'mobx'
class ThemeStore {
   @observable selectedTheme
   constructor() {
      this.selectedTheme = 'light-theme'
   }
   @action.bound
   onChangeTheme() {
      if (this.selectedTheme === 'dark-theme') {
         this.selectedTheme = ' light-theme'
      } else {
         this.selectedTheme = 'dark-theme'
      }
   }

   @computed
   get getCurrentTheme() {
      return this.selectedTheme
   }
}
const themeStore = new ThemeStore()
export { themeStore as default, ThemeStore }
