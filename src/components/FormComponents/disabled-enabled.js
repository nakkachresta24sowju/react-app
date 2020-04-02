import React from 'react';
//import { browserHistory } from "react-router";
import './disabled-enabled.css';
class DisableOrEnable extends React.Component {
      constructor(props) {
            super(props);
            this.state = { isDisableButtonChecked: 'Enabled', showMessage: ' ' };
      }
      handleChange = (event) => {
            if (event.target.checked === true) {
                  this.setState({ isDisableButtonChecked: 'Disabled' });
                  console.log("yes");
            }
            else {
                  this.setState({ isDisableButtonChecked: 'Enabled' });
                  console.log("no");
            }
      }
      /*handleSubmit = () => {

      }*/
      displayMessage = (value) => {
            if (value === 'Disabled')
                  this.setState({ showMessage: 'I am' + value });
            if (value === 'Enabled')
                  this.setState({ showMessage: 'Hi I am' + value });
      }
      onNavigateback = () => {
            window.history.back();
      }

      render() {
            console.log(this.state);
            return (<div>
      <div className="greet"><button className="svgimg" onClick={this.onNavigateback}><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></button>Greetings</div>
      <form className="container1">
      <input className="text-input" type="checkbox" name="checkbox" onChange={this.handleChange}/>
      <label>Disabled</label>
      <button className = "greet-btn" value="click me" onClick={() => this.displayMessage(this.state.isDisableButtonChecked)}>Click me</button>
      </form>
      <div className="display-status">{this.state.showMessage}</div>
      </div>);
      }
}
export { DisableOrEnable };
