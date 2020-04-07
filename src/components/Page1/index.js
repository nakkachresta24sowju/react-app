
import React from "react";
//import styled from '@emotion/styled';
import logo from "../../logo.svg";

function Page1() {
  return (<div className="bg-gray-800 h-screen flex justify-center items-center flex-col">
    <img src={logo} className="App-logo" alt="logo" />
    <p className="text-blue-400" >Learn React</p>
    <h1 className="text-white">Page 1</h1>
  </div>);
}

export default Page1;



/*
const Basic = ({ className }) => (
  <div className={className}>Some text</div>
)

const Fancy = styled(Basic)`
  color: hotpink;
`

const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)

const DivWithoutShorthand = styled('div')`
  color: green;
`

const DivWithShorthand = styled.div`
  color: hotpink;
  px-6;
  border-gray-400;

const Button = styled('button')`
color: #fff;
background-color: purple;
text-align: center;
padding-left: 1.5rem;
border-radius: 0.125rem;
padding-right: 1.5rem;
margin-right: auto;
margin-left: auto;
`


  return(<div>This my button component.</div>);
  return(<div>This my button component.</div>);
   return(<Fancy />);
   return(<H1 color="blue">This is lightgreen.</H1>)
   return(
    <DivWithoutShorthand>
      This is green.{' '}
      <DivWithShorthand>This is hotpink.</DivWithShorthand>
    </DivWithoutShorthand>);


    // const Button = styled.button`
//   ${tw`mt-6 bg-green-500 font-bold`}
// `;

const Button = styled('button')`
  bg-color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`
function Page1() {
  <div>
    <Button primary class=" " ></Button>
  </div>
  //return (<Button>Next</Button>);
}

*/



/*
theme development

import { FaRegMoon } from "react-icons/fa";
const Button = styled.button`
background-color:${props => props.background ? "#F8F8FF" : "black"};
color:${props => props.background ? "black" : "#f8f8ff"};
display:flex;
padding:16px;
border: 4px  solid green;
`;

const Parent = styled.div`
background-color:${props => props.background ? "pink" : "black"};
color:${props => props.background ? "black" : "pink"};
`;

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Parent background={this.state.isToggleOn}>
        <div>You Progress The Nation Follows</div>
        <Button background={this.state.isToggleOn} onClick={this.handleClick}>
          <FaRegMoon />{this.state.isToggleOn ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Parent>
    );
  }
}


export default Page1;


*/