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

const Pagination = styled.div`
   ${tw`flex border border-blue border-4 w-24 justify-center items-center float-right`}
`
const PaginationArrow = styled.button`
   ${tw`border border-black mr-2 ml-2`}
`
const PageNumber = styled.p`
   ${tw`border border-black `}
`
export {
   ProductPageContainer,
   ProductsContainer,
   SignOutBtn,
   ContainerHeader,
   ParentContainer,
   Pagination,
   PaginationArrow,
   PageNumber
}
