import React from "react";

import { observer } from 'mobx-react';
import { action } from 'mobx';
import { observable } from 'mobx';

import eventStored from '../../stores/EventStore/EventStore.js';
import AddEvent from './AddEvent';
import Event from './Event';
import EventList from './EventList';

@observer
class EventsApp extends React.Component {


    render() {
        console.log("eventsprops", eventStored);
        return (<div>
            <div><AddEvent onAddEvent={eventStored.onAddEvent} /></div>
            <div><EventList events={eventStored.events} onDeleteEvent={eventStored.onDeleteEvent} noOfEvents={eventStored.noOfEvents} /></div>
        </div>);
    }
    ''

}
export default EventsApp;



