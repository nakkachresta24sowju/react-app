
import { observable, action, toJS, computed } from 'mobx';
import Events from '../../stores/models/Events.js';


class EventStore {
    @observable events = [];



    @action.bound
    onAddEvent(name, location) {
        let eventObject = new Events();
        eventObject.name = name;
        eventObject.location = location;
        console.log("objectstore", eventObject);
        this.events.push(eventObject);
    }

    @action.bound
    onDeleteEvent(idvalue) {
        let array = [...this.events];
        const indexid = (element) => element.id === idvalue;
        let index = array.findIndex(indexid);
        array.splice(index, 1);
        this.events = array;

    }


    @computed get noOfEvents() {
        return this.events.length;
    }

}
const eventStored = new EventStore()
export default eventStored;