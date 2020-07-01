import React from 'react'
import { observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

import {
   ParentContainer,
   SignInContainer,
   TextSignIn,
   Submit,
   UserName,
   Password,
   TextError
} from './styles'
import SignInButton from './SignInButton'
import TextInputValidation from './Validation'
type Props = {
   userName: string
   onChangeUserName: any
   password: string
   onChangePassword: any
   onClickSignIn: any
   errorMessage: string
}

@observer
class SignIn extends React.Component<Props> {
   userNameRef = React.createRef<HTMLInputElement>()
   passwordRef = React.createRef<HTMLInputElement>()
   // componentDidMount() {
   //    this.userNameRef.current!.focus()
   // }
   static defaultProps = {
      userName: '',
      password: '',
      errorMessage: '',
      onChangeUserName: () => {},
      onChangePassword: () => {},
      onClickSignIn: () => {}
   }

   render() {
      const {
         userName,
         onChangeUserName,
         password,
         onChangePassword,
         onClickSignIn,
         errorMessage
      } = this.props

      TextInputValidation(userName)
      return (
         <ParentContainer>
            <SignInContainer>
               <TextSignIn>
                  <b>Sign In </b>
               </TextSignIn>
               <UserName
                  ref={this.userNameRef}
                  type='text'
                  defaultValue={userName}
                  placeholder='Username'
                  onChange={onChangeUserName}
               />
               <Password
                  type='password'
                  defaultValue={password}
                  placeholder='password'
                  onChange={onChangePassword}
                  ref={this.passwordRef}
               />
               <SignInButton onClickSignIn={onClickSignIn}>
                  Sign In
               </SignInButton>
               <TextError>{errorMessage}</TextError>
            </SignInContainer>
         </ParentContainer>
      )
   }
}
export { SignIn }
