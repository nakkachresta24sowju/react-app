<<<<<<< HEAD
import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";

class TodoService {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });
  }

  getTodos = () => {
    return networkCallWithApisauce(this.api, "todos/", {}, apiMethods.get);
  };
=======
import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

class TodoService {
      api
      constructor() {
            this.api = create({
                  baseURL: 'https://jsonplaceholder.typicode.com/'
            })
      }

      getTodos = () => {
            return networkCallWithApisauce(
                  this.api,
                  'todos/', {},
                  apiMethods.get
            );
      }
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
}
export default TodoService;
