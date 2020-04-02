import React from "react";
import logo from "../../logo.svg";

function Page1() {
      return (<div className="bg-gray-800 h-screen flex justify-center items-center flex-col">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="text-blue-300">Learn React</p>
  <h1 className="text-white">Page 1</h1>
  </div>);
}

export default Page1;
