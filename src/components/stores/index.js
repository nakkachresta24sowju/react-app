import UserService from "../Services/UserService/index.api";
import TodoService from "../Services/TodoService/index.api";

import UserStore from "./UserStore/index";
import TodoStore from "./TodoStore/index";

const userStore = new UserStore(new UserService());
const todoStore = new TodoStore(new TodoService());

export default {
  userStore,
  todoStore,
};
