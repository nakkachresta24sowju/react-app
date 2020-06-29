import React from 'react'
import Button from '../../../Common/components/Button/index'
import {
   TEXT_TITLE,
   ButtonTypes,
   ButtonVarient
} from '../../../Common/components/Button/constants/buttonConstants'
import { Typo14ButtonText } from '../../../Common/Typos/index'

class ButtonCreate extends React.Component {
   onClick = () => {
      alert('hai')
   }
   render() {
      return (
         <Button
            textTypo={Typo14ButtonText}
            className={'something'}
            onClick={this.onClick}
            type={Button.defaultTypes.type.Filled}
            varient={Button.defaultTypes.varient.Ovel}
            textTitle={TEXT_TITLE}
         />
      )
   }
}
export default ButtonCreate
