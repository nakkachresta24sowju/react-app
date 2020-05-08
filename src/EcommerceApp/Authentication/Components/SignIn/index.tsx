import React from "react";
import { Redirect } from "react-router-dom";
import { getAccessToken } from "../../../../utils/StorageUtils";
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
  userName: string;
  onChangeUserName: any;
  password: string;
  onChangePassword: any;
  onClickSignIn: any;
  errorMessage: string;
};

class SignIn extends React.Component<Props> {
  static defaultProps = {
    userName: "",
    password: "",
    errorMessage: "",
    onChangeUserName: () => {},
    onChangePassword: () => {},
    onClickSignIn: () => {},
  };
  render() {
    const {
      userName,
      onChangeUserName,
      password,
      onChangePassword,
      onClickSignIn,
      errorMessage,
    } = this.props;
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
            defaultValue={userName}
            placeholder="Username"
            onChange={onChangeUserName}
          />
          <Password
            type="password"
            defaultValue={password}
            placeholder="password"
            onChange={onChangePassword}
          />
          <Submit type="submit" onClick={onClickSignIn}>
            SignIn
          </Submit>
          <TextError>{errorMessage}</TextError>
        </SignInContainer>
      </ParentContainer>
    );
  }
}
export { SignIn };
