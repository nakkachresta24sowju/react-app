import React from 'react';

class YourState extends React.Component {
      constructor(props) {
            super(props);
            this.state = { selectedState: ' ', submittedState: ' ' };
      }
      handleChangeState = (event) => {
            this.setState({ selectedState: event.target.value });
      }
      handleSubmit = (event) => {
            event.preventDefault();
      }
      displayMessage = (statevalue) => {
            this.setState({ submittedState: 'I am from' + statevalue + 'state' });
      }
      renderStateOptions = () => {
            return this.props.stateList.map(statevalue => <option value={statevalue}>{statevalue}</option>);
      }
      onNavigateback = () => {
            window.history.back();
      }

      render() {
            return (<div>
            <div className="greet"><button className="svgimg" onClick={this.onNavigateback}><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></button>Your State</div>
      <form className="container1" onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.selectedState} onChange={this.handleChangeState} name="Select Your State">
          {this.renderStateOptions()}
          </select>
        </label>
        <button className="greet-btn" type="submit" value="Submit" onClick={() => this.displayMessage(this.state.selectedState)}></button>
      </form>
      <div className="display-status" >{this.state.submittedState}</div>
      </div>);
      }
}
export { YourState };
