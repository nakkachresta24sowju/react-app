import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Redirect, withRouter } from 'react-router-dom'
import { getAccessToken } from '../Utils/StorageUtils'
import { SignIn } from '../Components/SignIn/index'
type Props = {
   history: any
   authStore: any
}

@inject('authStore')
@observer
class SignInRoute extends React.Component<Props> {
   signInRef = React.createRef<SignIn>()
   @observable username: string = ''
   @observable password: string = ''
   @observable errorMessage: string = ''
   // @observable errorStatus;

   onChangeUsername = event => {
      this.username = event.target.value
   }
   onChangePassword = event => {
      this.password = event.target.value
   }

   onClickSignIn = async () => {
      const { history, authStore } = this.props
      if (
         this.username.length !== 0 &&
         this.password.length !== 0 &&
         authStore.getUserSignInAPIError === null
      ) {
         await authStore.userSignIn(this.username, this.password)
         if (getAccessToken()) {
            history.push('/ProductsPage')
            this.errorMessage = ''
         } else {
            this.errorMessage = 'Network Error'
         }
      } else if (authStore.getUserSignInAPIError) {
         this.errorMessage = 'Network Error'
      } else {
         if (this.username === '') {
            this.errorMessage = 'Please enter username'
         } else if (this.password === '') {
            this.errorMessage = 'Please enter password'
         }
      }

      if (this.errorMessage === 'Please enter username') {
         this.signInRef.current?.userNameRef.current?.focus()
      } else if (this.errorMessage === 'Please enter password') {
         this.signInRef.current?.passwordRef.current?.focus()
      }
   }
   render() {
      if (getAccessToken()) {
         return <Redirect to={{ pathname: '/ProductsPage' }} />
      }
      return (
         <SignIn
            userName={this.username}
            onChangeUserName={this.onChangeUsername}
            password={this.password}
            onChangePassword={this.onChangePassword}
            onClickSignIn={this.onClickSignIn}
            errorMessage={this.errorMessage}
            ref={this.signInRef}
         />
      )
   }
}
export default withRouter(SignInRoute)
