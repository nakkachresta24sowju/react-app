import styled from '@emotion/styled'
import tw from 'tailwind.macro'
type Props = {
   css: any
}
const ButtonWrapper = styled.button<Props>`
   css: ${props => props.css};
`
export { ButtonWrapper }
