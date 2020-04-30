import { observable, action } from "mobx";
<<<<<<< HEAD
import {
  API_INITIAL,
  API_FETCHING,
  API_SUCCESS,
  API_FAILED,
} from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class UserStore {
  @observable getUsersApiStatus;
  @observable getUsersApiError;
  @observable users;
  userService;

  constructor(userService) {
=======
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class UserStore {

  @observable getUsersApiStatus
  @observable getUsersApiError
  @observable users
  userService

  constructor(userService) {

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
    this.userService = userService;
    this.init();

  }

  @action
  init() {

    this.getUsersApiStatus = API_INITIAL;
    this.getUsersApiError = null;
    this.users = [];

  }

  @action.bound
  setUsersApiResponse(usersResponse) {
<<<<<<< HEAD
    this.users = usersResponse.map((user) => user.name);
=======

    this.users = usersResponse.map((user) => user.name);

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
  }

  @action.bound
  setUsersApiError(error) {
<<<<<<< HEAD
=======

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
    this.getUsersApiError = error;
  }

  @action.bound
  getUsersAPI() {
<<<<<<< HEAD
=======

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
    const usersPromise = this.userService.getUsersAPI();

    return bindPromiseWithOnSuccess(usersPromise)
      .to(this.setUsersAPIStatus, this.setUsersApiResponse)
      .catch(this.setUsersApiError);
  }

  @action.bound
  setUsersAPIStatus(apiStatus) {
<<<<<<< HEAD
    this.getUsersApiStatus = apiStatus;
=======

    this.getUsersApiStatus = apiStatus;

>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
  }

  @action
  clearStore() {

    this.init();

  }
}

export default UserStore;
