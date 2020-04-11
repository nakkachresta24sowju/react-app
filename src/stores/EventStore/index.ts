import { observable, action, toJS, computed } from 'mobx';
import Event from '../../stores/models/Event.js';
import AddEvent from '../../components/EventApp/AddEvent.js';

class EventStore {
    @observable events = [];



    @action.bound
    onAddEvent() {

        let eventObject = new Event();

        AddEvent.push(eventObject);
    }

    @action.bound
    onDeleteEvent() {

    }


    @computed get noOfEvents() {
        //return this.todos;
    }

}
const eventStored = new EventStore()
export default eventStored;
