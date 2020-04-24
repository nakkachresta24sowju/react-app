import React from "react";
import { LoginContainer, Submit } from './styles.js';
class LoginPage extends React.Component {


      render() {
            return (
                  <LoginContainer>
                   <input type="text" placeholder="User Name" />
                   <input type="password" placeholder="Password" />
                   <Submit type="submit">submit</Submit>
                  </LoginContainer>
            );
      }
}
export default LoginPage;
