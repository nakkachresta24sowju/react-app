import React from "react";

import { observer } from 'mobx-react';
//import { action } from 'mobx';
//import { observable } from 'mobx';

import Event from './Event';

@observer
class EventList extends React.Component {


    render() {
        const { events, onDeleteEvent } = this.props;
        return (<div>
            <div>{events.map(eachEvent => <Event key={eachEvent.id} event={eachEvent} onDeleteEvent={onDeleteEvent} />)}</div>
        </div>);
    }


}
export default EventList;
