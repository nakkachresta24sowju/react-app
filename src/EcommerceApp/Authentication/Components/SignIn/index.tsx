import React from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { Redirect, withRouter } from "react-router-dom";
import { getAccessToken } from "../../Utils/StorageUtils";
import {
  ParentContainer,
  SignInContainer,
  TextSignIn,
  Submit,
  UserName,
  Password,
  TextError,
} from "./styles";

type Props = {
  history: any;
  authStore: any;
};

@inject("authStore")
@observer
class SignIn extends React.Component<Props> {
  @observable username: string = "";
  @observable password: string = "";
  @observable errorMessage: string = "";
  @observable errorStatus;

  constructor(props) {
    super(props);
  }

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
      <ParentContainer>
        <SignInContainer>
          <TextSignIn>
            <b>SignIn</b>
          </TextSignIn>
          <UserName
            type="text"
            placeholder="UserName"
            onChange={this.onChangeUsername}
          />
          <Password
            type="password"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <Submit type="submit" onClick={this.onClickSignIn}>
            SignIn
          </Submit>
          <TextError>{this.errorStatus}</TextError>
        </SignInContainer>
      </ParentContainer>
    );
  }
}
export default withRouter(SignIn);
