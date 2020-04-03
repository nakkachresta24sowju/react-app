import React from 'react';
import styled from '@emotion/styled';


// const Button = styled('button')`
// color: #b794f4;
// background-color: #000;
// text-align: center;
// padding-left: 1.5rem;
//padding-right: 1.5rem;
//`
const Basic = ({ className }) => (
  <div className={className}>Some text</div>
)

const Fancy = styled(Basic)`
  color: hotpink;
`

// const H1 = styled.h1(
//   {
//     fontSize: 20
//   },
//   props => ({ color: props.color })
// )

// const DivWithoutShorthand = styled('div')`
//   color: green;
// `

// const DivWithShorthand = styled.div`
//   color: hotpink;
//   px-6;
//   border-gray-400;
// 
function Page1()
 {
  //return(<div>This my button component.</div>);
   //return(<div><Button>This my button component.</Button></div>);
   return(<Fancy />);
   //return(<H1 color="blue">This is lightgreen.</H1>)
  //  return(
  //   <DivWithoutShorthand>
  //     This is green.{' '}
  //     <DivWithShorthand>This is hotpink.</DivWithShorthand>
  //   </DivWithoutShorthand>);
}

export default Page1;



// import React from "react";
// import logo from "../../logo.svg";

// function Page1() {
//       return (<div className="bg-gray-800 h-screen flex justify-center items-center flex-col">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p className="text-blue-400" >Learn React</p>
//   <h1 className="text-white">Page 1</h1>
//   </div>);
// }

// export default Page1;