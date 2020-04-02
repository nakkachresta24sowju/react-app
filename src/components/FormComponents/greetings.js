import React from 'react';
import './greetings.css';
class Greetings extends React.Component {
      constructor(props) {
            super(props);
            this.state = { userInputText: ' ', displayName: ' ', count: 0 };

      }
      handleUserInput = (event) => {
            this.setState({ userInputText: event.target.value });

      }
      handleSubmit = (event) => {
            event.preventDefault();
      }
      displayMessage = (text) => {
            this.setState({ displayName: 'A name was submitted:' + text });
      }
      onNavigateback = () => {
            window.history.back();
      }

      render() {
            console.log(this.state);
            return (<div>
      <div className="greet"><button className="svgimg" onClick = { this.onNavigateback }><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></button>Greetings</div>
      <form className="container1" onSubmit={this.handleSubmit}>
        <label>
          <input className = "text-input" type="text" value={this.state.userInputText} onChange={this.handleUserInput} />
        </label>
        <br/>
        <button onClick={ () => this.onIncrement()}>count</button>
        <button className="greet-btn" type="submit" onClick={() => this.displayMessage(this.state.userInputText)}>Greet</button>
      </form>
      <div className="display-status">{this.state.displayName}</div>
      </div>);
      }

}
export { Greetings };

// <div>{this.displayMessage(this.state.userInputText)}</div>
/*class parentIncrement extends React.Component


      onIncrement = () => {
            this.setState(prevState =>
                  ({
                        count: prevState.count + 1
                  }));
            console.log("log1", this.state.count);
            this.setState(prevState =>
                  ({
                        count: prevState.count + 1
                  }));
            console.log("log2", this.state.count);
            this.setState(prevState =>
                  ({
                        count: prevState.count + 1
                  }));
            console.log("log3", this.state.count);
            /* this.setState(prevState =>
                   ({
                         count: prevState.count + 1
                   })); 
            this.setState({ count: this.state.count + 1 });
            console.log("log1", this.state.count);
            this.setState({ count: this.state.count + 1 });
            console.log("log2", this.state.count);
            this.setState({ count: this.state.count + 1 });
            console.log("log3", this.state.count);
      }
{
constructor()
{
state={parentcount:0};
};
onparentIncrement = ()  =>
{
  this.setState({parentcount:this.state.parentcount + 1});
};
render() {
console.log("parent couunter",this.state);
      return(
      <childIncrement
      onparentIncrement={this.onparentIncrement}
      parentcount= {this.state.parentcount}
      />
      );
}
class childIncrement extends React.Component
{
constructor(props)
{
super(props);
state={childcount1:0,
      childcount2:0};
};
onIncrement = ()  =>
{
  this.props.onparentIncrement();
  this.setState({count:this.state.childcount1 + 1});
  this.setState({count:this.state.childcount2 + 1});
}
render()
{
      console.log("childcounter",this.state);
      return(
            <div><button onClick={ () => this.onIncrement()}>count</button></div>);
}
}*/
