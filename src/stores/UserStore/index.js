import { observable, action } from "mobx";
import {
  API_INITIAL,
  API_FAILED,
  API_FETCHING,
  API_SUCCESS,
} from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import UserService from "../../Services/UserService/index.fixture";
import UserService from "../../Services/UserService/index.api";
class UserStore {
  @observable getUsersApiStatus;
  @observable getUsersAPiError;
  @observable users;
  userService;
  constructor() {
    this.userService = userService;
    this.init();
  }

  @action
  init() {
    this.getUsersApiStatus = API_INITIAL;
    this.getUsersAPiError = null;
    this.users = [];
  }

  @action.bound
  getUsers() {
    const usersPromise = this.userService.getUsersApi;
    return bindPromiseWithOnSuccess(
      usersPromise.to(this.setUsersApiStatus, this.setUsersAPIResponse)
    ).catch(this.getUsersAPIError);
  }

  @action.bound
  setUsersAPIResponse(users) {
    this.users = users.map((user) => user.name);
  }
  @action.bound
  setUsersApiStatus() {
    this.getUsersApiStatus = this.apiStatus;
  }

  @action.bound
  setUsersAPIError() {
    this.getUsersAPiError = error;
  }

  @action.bound
  clearStore() {
    this.init();
  }
}

const userService = new UserService();
const userStore = new UserStore(userService);
export default userStore;
