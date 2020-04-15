import { observable } from 'mobx';

class Cell {
    id;
    @observable isHidden;

    constructor() {
        this.id;
        this.isHidden = false;
    }


}
export default Cell;