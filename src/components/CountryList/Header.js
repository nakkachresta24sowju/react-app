import React from 'react'
import './Header.css'
import { FaRegMoon } from 'react-icons/fa'
import themeStore from '../../stores/ThemeMode'

class Header extends React.Component {
   // onChangeTheme = () => {
   //    this.props.onChangeTheme()
   // }
   render() {
      return (
         <div
         //className={this.props.isThemeChanged ? 'dark-theme' : 'light-theme'}
         >
            <div className='header'>
               <div className='header-text'>Where in the world?</div>
               <div className='theme-btn'>
                  <span className='Moon'>
                     <FaRegMoon />
                  </span>
                  <button onClick={this.onChangeTheme}>Theme</button>
               </div>
            </div>
         </div>
      )
   }
}

export { Header }

// render() {
//    console.log(themeStore, 55)
//    return (
//       <div
//          className={
//             themeStore.selectedTheme === 'light-theme'
//                ? 'light-theme'
//                : 'dark-theme'
//          }
//       >
//          <div className='header'>
//             <div className='header-text'>Where in the world?</div>
//             <div className='theme-btn'>
//                <span className='Moon'>
//                   <FaRegMoon />
//                </span>
//                <button
//                   className={
//                      themeStore.selectedTheme === 'dark-theme'
//                         ? 'header-button-dark '
//                         : 'header-button-light'
//                   }
//                   onClick={themeStore.onChangeTheme()}
//                >
//                   {themeStore.selectedTheme === 'dark-theme'
//                      ? 'DarkMode '
//                      : 'LightMode '}
//                </button>
//             </div>
//          </div>
//       </div>
//    )
// }
// }
//{this.props.isThemeChanged ? 'DarkMode ' : 'LightMode '}
