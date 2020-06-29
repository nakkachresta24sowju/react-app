import React from 'react'
import { ButtonWrapper } from './styledComponent'

type Props = {
   textTypo: any
   className: any
   textTitle: any
   onClick: any
   varient: any
   css: any
}
class BaseButton extends React.Component<Props> {
   render() {
      const { textTypo, textTitle, className, onClick, css } = this.props
      return (
         <ButtonWrapper className={className} onClick={onClick} css={css}>
            {textTitle}
         </ButtonWrapper>
      )
   }
}
export default BaseButton
