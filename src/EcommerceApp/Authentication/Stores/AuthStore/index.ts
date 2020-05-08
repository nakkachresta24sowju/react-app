import React from "react";
import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import {
  setAccessToken,
  clearUserSession,
} from "../../../../utils/StorageUtils";
import {
  API_SUCCESS,
  API_FAILED,
  API_FETCHING,
  API_INITIAL,
} from "@ib/api-constants";
class AuthStore {
  @observable getUserSignInAPIStatus;
  @observable getUserSignInAPIError;
  authAPIService: any;

  constructor(authAPIService) {
    this.authAPIService = authAPIService;
    this.init();
  }
  @action.bound
  init() {
    this.getUserSignInAPIStatus = API_INITIAL;
    this.getUserSignInAPIError = null;
  }

  @action.bound
  userSignIn() {
    const authPromise = this.authAPIService.signInAPI();
    return bindPromiseWithOnSuccess(authPromise)
      .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
      .catch(this.setGetUserSignInAPIError);
  }

  @action.bound
  setUserSignInAPIResponse(authResponse) {
    setAccessToken(authResponse);
  }

  @action.bound
  setGetUserSignInAPIError(error) {
    this.getUserSignInAPIError = error;
  }

  @action.bound
  setGetUserSignInAPIStatus(apiStatus) {
    this.getUserSignInAPIStatus = apiStatus;
  }

  @action.bound
  userSignOut() {
    clearUserSession();
    this.init();
  }
}
export default AuthStore;
