import React from "react";

import { observer } from 'mobx-react';
import { action } from 'mobx';
import { observable } from 'mobx';

import './AddEvent.css';

type Props = {
    onAddEvent: Function
}

@observer
class AddEvent extends React.Component<Props>{

    @observable eventName;
    @observable eventLocation;

    @action.bound
    onAddEvent() {
        this.props.onAddEvent(this.eventName, this.eventLocation);
    }

    @action.bound
    onChangeEventName(event) {
        event.preventDefault();
        this.eventName = event.target.value;
    }

    @action.bound
    onChangeEventLocation(event) {
        event.preventDefault();
        this.eventLocation = event.target.value;
    }



    render() {
        return (<div>
            <div>Event List</div>
            <input type="text" className="item1" onChange={this.onChangeEventName} />
            <input type="text" className="item1" onChange={this.onChangeEventLocation} />
            <button className="button" onClick={this.onAddEvent}></button>
        </div>);
    }


}
export default AddEvent;
