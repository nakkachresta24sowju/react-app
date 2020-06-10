import { observable } from 'mobx';

class Cell {
    @observable id: string;
    @observable isHidden: boolean;

    constructor() {
        this.id = Math.random().toString();
        this.isHidden = false;
    }


}
export default Cell;