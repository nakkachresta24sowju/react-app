import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import BaseButton from '../BaseButton/BaseButton'
import { css, jsx } from '@emotion/core'
const OutlineButton = styled(BaseButton)`
   ${tw`bg-blue-900 border border-red border-solid`}
`
const ovel = css`
   border-radius: 5px;
   background-color: cornflowerblue;
   border: 2px solid greenyellow;
`
const rectangular = css`
   border-radius: 0px;
   background-color: indianred;
   border: 2px solid indigo;
`
export { OutlineButton, ovel, rectangular }
