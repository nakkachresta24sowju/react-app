
import { observable, action } from 'mobx';
import Events from '../models/Events';


class EventStore {
    @observable events: Array<Events>

    constructor() {
        this.events = []
    }


    @action.bound
    onAddEvent(name, location) {
        let eventObject = new Events();
        eventObject.name = name;
        eventObject.location = location;
        console.log("objectstore", eventObject);
        this.events.push(eventObject);
    }

    @action.bound
    onDeleteEvent(idvalue: string) {
        let array = [...this.events];
        const indexid = (element) => element.id === idvalue;
        let index = array.findIndex(indexid);
        array.splice(index, 1);
        this.events = array;

    }


    // @computed get noOfEvents() {
    //     return this.events.length;
    // }

}
const eventStored = new EventStore()
export { eventStored as default, EventStore }