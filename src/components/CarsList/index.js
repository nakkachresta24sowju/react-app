import React from 'react';
import './index.css';
/* class CarsList extends React.Component {
      render() {
            return <div>CarsList Component</div>;
      }
}
export { CarsList };
*/
let carId;
class Car extends React.Component {
      constructor(props) {
            super(props);
            this.state = { status: "STOPPED", speed: 0, value: "Start", displayText: "Stopped" };
      }
      onStartOrStop = () => {
            if (this.state.status === "STOPPED" && this.state.speed === 0) {
                  this.setState({ status: "RUNNING", value: "Stop" });
            }
            else {
                  this.setState({ status: "STOPPED", speed: 0, value: "Start" });
            }
            this.displayStatusText();
      }
      onApplyBrake = () => {
            if (this.state.speed > 0)
                  this.setState({ speed: this.state.speed - 10 })
            this.displayStatusText();
            //status: "Running", 
            return this.state;
      }
      onAccelerate = () => {
            this.setState({ speed: this.state.speed + 10 });
            this.displayStatusText();
            // status: "Running", 
            return this.state;
      }
      displayStatusText = () => {
            if (this.state.value === "Start" && this.state.status === "STOPPED")
                  this.setState({ displayText: "Stopped" });
            else if (this.state.speed === 0)
                  this.setState({ displayText: "Running" });
            else
                  this.setState({ displayText: `Running with speed ${this.state.speed}Kmph` });
            return this.state;
      }

      render() {
            console.log(this.state);

            return (
                  <div className="container">
       <div className="header">
      <span>Car:{this.props.id}</span>
      <button onClick={this.props.removecar}>x</button>
       </div>
        <div>
        <button className="button-style start-stop" onClick={this.onStartOrStop}>{this.state.value}</button>
        </div>
        <span>Status:{this.state.displayText}</span>
        <div className="footer">
        <button className="button-style acceleration" onClick={this.onAccelerate}>Accelerate</button>
        <button className="button-style deceleration" onClick={this.onApplyBrake}>Apply Break</button>
        </div>
      </div>);
      }
}

class CarsList extends React.Component {
      constructor(props) {
            super(props);
            carId = 1;
            this.state = { carsList: [carId] };
      }
      addCarToCarsList = () => {
            carId = carId + 1;
            this.setState(addElement => ({ carsList: addElement.carsList = [...addElement.carsList, carId] }));
      }
      removeCarFromCarsList = (id) => {
            console.log(id);
            let array = this.state.carsList;
            console.log(array);
            for (let i = 0; i < array.length; i++) {
                  if (parseInt(id) === array[i])
                        array.splice(i, 1);
            }
            this.setState(array);
      }


      render() {
            return (<div>
                  <button className="button-style add-car" onClick ={this.addCarToCarsList} >Add Car</button>
                  <div>{this.state.carsList.map((carId) =>
                  <Car id={carId}  removecar = {
                        () => this.removeCarFromCarsList(carId) }/>)}
                  </div>
                  </div>);
      }

}
export { CarsList, Car };
/*
class Counter extends React.Component {
      constructor(props) {
            super(props);
            this.state = { count: 10 };
      }
      onIncrement = () => {
            const { count } = this.state;
            this.setState({ count: count + 1 });
            this.setState({ count: count + 1 });
            this.setState({ count: count + 1 });

            this.setState(prevState => ({
                  count: prevState.count + 1
            }));
            this.setState(prevState => ({
                  count: prevState.count + 1
            }));
            this.setState(prevState => ({
                  count: prevState.count + 1
            }));

            console.log("state", count);
      };
      render() {
            console.log("render", this.state);
            const { count } = this.state;
            return (<div><p>Count: {count}</p><button onClick={this.onIncrement}>Increment</button></div>);
      }
}

export { Counter };
*/
