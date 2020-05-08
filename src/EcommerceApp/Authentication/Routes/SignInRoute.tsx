import React from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { Redirect } from "react-router-dom";
import { getAccessToken } from "../Utils/StorageUtils";
import { SignIn } from "../Components/SignIn/index";
type Props = {
  history: any;
  authStore: any;
};

@inject("authStore")
@observer
class SignInRoute extends React.Component<Props> {
  @observable username: string = "";
  @observable password: string = "";
  @observable errorMessage: string = "";
  @observable errorStatus;

  onChangeUsername = (event) => {
    this.username = event.target.value;
  };
  onChangePassword = (event) => {
    this.password = event.target.value;
  };

  onClickSignIn = () => {
    this.props.authStore.userSignIn();
    if (
      this.username === "" ||
      (this.username === "" && this.password === "")
    ) {
      this.errorStatus = "Please enter username";
    } else if (this.password === "") {
      this.errorStatus = "Please enter password";
    } else if (!window.navigator.onLine) {
      this.errorStatus = "Network Error";
    } else {
      const { history } = this.props;
      history.push("/ProductsPage");
    }
  };
  render() {
    if (getAccessToken()) {
      return <Redirect to={{ pathname: "/ProductsPage" }} />;
    }
    return (
      <SignIn
        userName={this.username}
        onChangeUserName={this.onChangeUsername}
        password={this.password}
        onChangePassword={this.onChangePassword}
        onClickSignIn={this.onClickSignIn}
        errorMessage={this.errorStatus}
      />
    );
  }
}
export { SignInRoute };
