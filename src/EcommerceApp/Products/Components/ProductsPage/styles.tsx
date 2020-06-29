import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ProductPageContainer = styled.div`
   ${tw`min-h-screen flex mr-14 `}
`
const ProductsContainer = styled.div`
   ${tw`flex flex-col w-full h-full  `}
`
const SignOutBtn = styled.button`
   ${tw`rounded p-1 text-xs`}
   border:1px solid grey;
`
const ContainerHeader = styled.div`
   ${tw`flex justify-between ml-8 mt-6`}
`
const ParentContainer = styled.div``
export {
   ProductPageContainer,
   ProductsContainer,
   SignOutBtn,
   ContainerHeader,
   ParentContainer
}
