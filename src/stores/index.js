<<<<<<< HEAD
import UserService from "../Services/UserService/index.api";
import TodoService from "../Services/TodoService/index.api";

import UserStore from "./UserStore/index";
import TodoStore from "./TodoStore/index";
=======
import UserService from '../Services/UserService/index.api';
import TodoService from '../Services/TodoService/index.api';

import UserStore from './UserStore/index';
import TodoStore from './TodoStore/index';
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d

const userStore = new UserStore(new UserService());
const todoStore = new TodoStore(new TodoService());

export default {
<<<<<<< HEAD
  userStore,
  todoStore,
=======
      userStore,
      todoStore
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
};
