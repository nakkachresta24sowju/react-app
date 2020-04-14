import React from "react";

import { observer } from 'mobx-react';
//import { action } from 'mobx';
//import { observable } from 'mobx';
import Event from './Event';
//import { EventStore } from '../../stores/EventStore/EventStore';
//import Events from '../../stores/models/Events';


type Props = {
    events: any
    onDeleteEvent: Function
}

@observer
class EventList extends React.Component<Props>{


    render() {
        const { onDeleteEvent, events } = this.props;
        return (<div>
            <div>{events.map(eachEvent => <Event key={eachEvent.id} event={eachEvent} onDeleteEvent={onDeleteEvent} />)}</div>
        </div>);
    }


}
export default EventList;
