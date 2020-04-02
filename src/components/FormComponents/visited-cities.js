import React from 'react';
class VisitedCities extends React.Component {
      constructor(props) {
            super(props);
            this.state = { visitedCities: ' ', selectedCities: [], cityOptions: ' ', isChecked: "uncheck" };
      }
      handleCheckboxClick = (event) => {
            this.setState({ cityOptions: event.target.id });
            if (event.target.checked === true)
                  this.setState({ isChecked: "checked" });
            else
                  this.setState({ isChecked: "uncheck" });
      }
      handleSubmit = (event) => {
            event.preventDefault();
      }
      displayVisitedCitiesMessage = (value) => {
            // for (let i = 0; i < this.state.selectedCities.length; i++) {
            if (this.state.isChecked === "checked") {
                  this.setState(prevState => ({ selectedCities: prevState.selectedCities = [...prevState.selectedCities, value] }));
            }
            // }
            //this.setState(previousstate => ({ todoList: previousstate.todoList = [...previousstate.todoList, text] }));
            for (let i = 0; i < this.state.selectedCities.length; i++) {
                  if (this.state.selectedCities[i] === value)
                        this.setState({ visitedCities: 'I have visited these cities' + [...this.state.selectedCities] });
            }
      }
      renderCityOptions = () => {
            return this.props.cityList.map(cityvalue => <div><input type="checkbox"  id={cityvalue}/>{cityvalue}</div>);
      }
      onNavigateback = () => {
            window.history.back();
      }

      render() {
            console.log(this.state);
            return (<div>
            <div className="greet"><button className="svgimg" onClick={this.onNavigateback}><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></button>Visited Cities</div>
      <form className="container1" onSubmit={this.handleSubmit}>
      <p>Which of the following cities you have visited ?</p>
          <div value={this.state.cityOptions} onChange={this.handleCheckboxClick}>
          {this.renderCityOptions()}
          </div>
        <button type="submit" value="Submit" onClick={() => this.displayVisitedCitiesMessage(this.state.cityOptions)}></button>
      </form>
      <div className="display-status">{this.state.visitedCities}</div>
      </div>);
      }

}
export { VisitedCities };


//this.setState(addElement => ({ carsList: addElement.carsList = [...addElement.carsList, carId] }));
/* for (let index = 0; index < this.state.selectedCities.length; index++) {
       if (this.state.selectedCities[index] !== value) {
             this.setState(prevState => ({ selectedCities: prevState.selectedCities = [...prevState.selectedCities, value] }));
       }
 }
this.state.selectedCities.filter(e => e !== value);
this.setState({
      selectedCities: [...this.state.selectedCities, value],
});*/
