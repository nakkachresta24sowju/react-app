import React from 'react';
class FavouriteDessert extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { selectedDessert: ' ', favoriteDessert: ' ' };
  }
  handleUserInput = (event) => {
    this.setState({ selectedDessert: event.target.id });
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  displayMessage = (value) => {
    this.setState({ favoriteDessert: 'My favorite dessert is' + value });
  }
  renderDessertOptions = () => {
    return this.props.dessertList.map(desertvalue => <div><input type="radio" name="dessert" id={desertvalue}/><span>{desertvalue}</span></div>);
  }
  onNavigateback = () => {
    window.history.back();
  }

  render() {
    console.log(this.state);
    return (<div>
    <div className="greet"><button className="svgimg" onClick={this.onNavigateback}><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></button>Favourite Dessert</div>
      <form className="container1" onSubmit={this.handleSubmit}>
      <p>Please select your favorite dessert:</p>
          <div  className="listItems" value={this.state.selectedDessert} onChange={this.handleUserInput}>
          {this.renderDessertOptions()}
          </div>
        <button className="greet-btn" type="submit" value="Submit" onClick={() => this.displayMessage(this.state.selectedDessert)}></button>
      </form>
      <div className="display-status" >{this.state.favoriteDessert}</div>
      </div>);
  }

}

export { FavouriteDessert };
