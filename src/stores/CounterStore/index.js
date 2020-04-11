
import { observable, action } from 'mobx';

class CounterStore {
   @observable count = 0;

   @action.bound
   onIncrement() {
      this.count++;
   }
   @action.bound
   onDecrement() {
      this.count--;
   }
   @action.bound
   onChange(event) {
      this.count = event.target.value;
   }
}
const counterStore = new CounterStore();
export default counterStore;















// import { observable, action } from 'mobx'

// class CounterStore {
//    @observable count = 0

//    @action.bound
//    incrementCounter() {
//       this.count = this.count + 1
//    }

//    @action.bound
//    decrementCounter() {
//       this.count = this.count - 1
//    }
// }

// export default CounterStore
