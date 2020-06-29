import React from 'react'
import BaseButton from '../../../Common/components/BaseButton/BaseButton'
import {
   TEXT_TITLE,
   ButtonTypes,
   ButtonVarient
} from './constants/buttonConstants'
import { OutlineButton, ovel, rectangular } from './styledComponents'
import './index.css'
type Props = {
   textTypo: any
   className: any
   textTitle: any
   onClick: any
   varient: any
   type: any
}

class Button extends React.Component<Props> {
   static defaultTypes = {
      type: ButtonTypes,
      varient: ButtonVarient
   }
   variantsCss = () => {
      const { varient } = this.props
      switch (varient) {
         case varient.Ovel:
            return ovel
         case varient.Rectangular:
            return rectangular
         default:
            return
      }
   }

   render() {
      const { type, ...otherProps } = this.props

      switch (type) {
         case ButtonTypes.Filled:
            return <BaseButton {...otherProps} css={this.variantsCss()} />
         case ButtonTypes.Outline:
            return <OutlineButton {...otherProps} css={this.variantsCss()} />
         default:
            console.warn('invalid type')
            return null
      }
   }
}
export default Button

// @action
//
//    render() {
//       switch (ButtonTypes) {
//          case ButtonTypes.Filled: {
//             return (
//                <BaseButton
//                   textTypo={Typo14ButtonText}
//                   className='something'
//                   textTitle={TEXT_TITLE}
//                   onClick={this.onClick}
//                   type={ButtonTypes}
//                   css={this.variantsCss()}
//                />
//             )
//          }
//          case ButtonTypes.Outline: {
//             return (
//                <BaseButton
//                   textTypo={Typo14ButtonText}
//                   className='something'
//                   textTitle={TEXT_TITLE}
//                   onClick={this.onClick}
//                   type={ButtonTypes}
//                   css={this.variantsCss()}
//                />
//             )
//          }
//          default: {
//             return (
//                <BaseButton
//                   textTypo={Typo14ButtonText}
//                   className='something'
//                   textTitle={TEXT_TITLE}
//                   onClick={this.onClick}
//                   type={ButtonTypes}
//                   css={this.variantsCss()}
//                />
//             )
//          }
//       }
//    }
