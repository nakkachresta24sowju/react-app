import styled from '@emotion/styled'
import tw from 'tailwind.macro'
type Props = {
   isClicked: boolean
}
const SizeFilterContainer = styled.div`
   ${tw` min-h-screen w-4/5 ml-8`};
`

const SizeText = styled.p`
   ${tw`font-bold p-5`};
`
const Btn = styled.button`
   ${tw`rounded-full m-1  h-10 w-10 hover:border-gray-600 border focus:outline-none`};
   background-color: ${(p: Props) =>
      p.isClicked === false ? 'black' : '#F5F5F5'};
   color: ${(p: Props) => (p.isClicked === false ? 'white' : 'black')};
`

const SizeBtn = styled.div`
   ${tw`flex justify-start flex-wrap pl-5`};
`
export { SizeFilterContainer, SizeText, SizeBtn, Btn }
