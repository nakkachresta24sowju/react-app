

import { observable, action } from 'mobx';
//import { observer } from 'mobx-react';


class Events {
    @observable id;
    @observable name;
    @observable location;
    constructor() {
        this.id = Math.random().toString();
        this.name = " ";
        this.location = " ";
    }


    @action.bound
    onUpdateEventDetails() {
        alert("hai");
    }
}
export default Events;