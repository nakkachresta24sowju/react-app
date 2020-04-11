import React from "react";

import { observer } from 'mobx-react';
import { action, toJS } from 'mobx';
import { observable } from 'mobx';


@observer
class AddEvent extends React.Component {

    @observable isEditEvent = false;
    @observable eventName;
    @observable eventLocation;

    @action.bound
    onDeleteEvent(event) {
        this.props.onDeleteEvent(event.target.id);
    }

    @action.bound
    onChangeEventName() {

    }

    @action.bound
    onChangeEventLocation() {

    }


    @action.bound
    onUpdateEventDetails() {

        const { event } = this.props
        this.isEditEvent = true;
        event.onUpdateEventDetails(this.isEditEvent);

    }


    render() {
        if (this.isEditEvent === false) {
            const { event } = this.props
            return (<div>
                <div>
                    <span>{event.name}</span>
                    <button id={event.id} onClick={this.onUpdateEventDetails}>edit</button>
                </div>
                <div>
                    <span>{event.location}</span>
                    <button id={event.id} onClick={this.onDeleteEvent}>delete</button>
                </div>
            </div>);
        }
        else {
            <div>
                <span>{event.name}</span>
                <button id={event.id} onClick={this.onUpdateEventDetails}>update</button>
                <div>
                    <span>{event.location}</span>
                </div>
            </div>
        }
    }


}
export default AddEvent;
