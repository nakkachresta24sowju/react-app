import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, withRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import AuthService from '../Services/AuthService/index'
import AuthStore from '../Stores/AuthStore/index'
//import getUserSignInResponse from "../Fixtures/getUserSignInResponse.json";

import SignInRoute from './SignInRoute'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('SignInRoute Tests', () => {
   let authService
   let authStore

   beforeEach(() => {
      authService = new AuthService()
      authStore = new AuthStore(authService)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} history={history} />
         </Router>
      )
      const signInButton = getByRole('button', { name: 'SignIn' })

      fireEvent.click(signInButton)
      getByText(/Please enter username/i)
   })
   it('should render password empty error message', () => {
      const { getByText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} history={history} />
         </Router>
      )
      const username = 'test-user'
      const usernameField = getByPlaceholderText('Username')
      const signInButton = getByRole('button', { name: 'SignIn' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(signInButton)
      getByText(/Please enter password/i)
   })
})
