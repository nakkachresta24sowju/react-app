import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import SignInButton from './SignInButton'

export default {
   component: SignInButton,
   title: 'Common/SignInButton'
}

export const defaultView = () => <SignInButton />

export const ThemeModeClick = () => (
   <SignInButton
      onClickSignIn={action('ThemeMode clicked')}
      clickedMessage={'Clicked'}
   />
)
export const knobs = () => (
   <SignInButton
      onClickSignIn={action('SignIn clicked')}
      clickedMessage={text('clickedMessage', 'LogIn')}
   />
)
knobs.story = {
   decorators: [withKnobs]
}
