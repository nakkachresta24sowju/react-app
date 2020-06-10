import React from 'react'
class ThemeMode {
   constructor() {
      this.state = { isThemeChanged: false }
   }
   onChangeTheme = () => {
      // this.setState(prevState => ({
      //    isThemeChanged: !prevState.isThemeChanged
      // }))
      this.isThemeChanged = !this.isThemeChanged
   }
}
const themeStore = new ThemeMode()
export { themeStore as default }
