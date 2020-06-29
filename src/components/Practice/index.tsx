import React from 'react'
import getLoadingStatus from '@ib/api-utils'
//import { observer } from 'mobx-react';
//import { Provider } from 'mobx-react';
//import { inject } from 'mobx-react';
//import { observable } from 'mobx';
//import counterStore from '../../stores/CounterStore';

class Practice extends React.Component {
   render() {
      return <div>inject</div>
   }
}

export default Practice

// reaction1 = reaction(
//     () => counterStore.count,
//     count => console.log("count", count)
// );

// @action.bound
// onIncrement() {
//     this.count.push("hai");
//     this.count.push("helo");
//     console.log(this.count);
// }
// @action.bound
// onDecrement() {
//     this.count--;
// }
// @action.bound
// onChange(event) {
//     this.count = event.target.value;
// }

//<------------------------------------------->
{
   /*
class Practice extends React.Component {
    render() {
        const { temp } = this.props;
        return (<Provider temp={'inject'}><Practice1 /></Provider>)
    }

}

@inject('temp')
@observer
class Practice1 extends React.Component {
    @observable name;
    onChange = (event) => {
        this.name = event.target.value;
    }
    render() {
        const { temp } = this.props;
        console.log("B", temp);
        return (<div>
            <input value={this.name} onChange={this.onChange} />
            <Practice2 temp={this.name} />
        </div>)
    }

}

@inject('temp')
@observer
class Practice2 extends React.Component {
    render() {
        const { temp } = this.props;
        console.log("c", temp);
        return (<div>{temp}</div>)
    }

}
//const counterStore = new Practice(); */
}
