import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import '../../../src/styles/tailwind.css'
import BaseButton from './BaseButton.js'

export default {
   component: BaseButton,
   title: 'Common/Header'
}

export const defaultView = () => <BaseButton clickedMessage={'Theme Mode'} />

export const ThemeModeClick = () => (
   <BaseButton
      onPlayAgainClick={action('ThemeMode clicked')}
      clickedMessage={'Clicked'}
   />
)
export const knobs = () => (
   <BaseButton
      onPlayAgainClick={action('ThemeMode clicked')}
      clickedMessage={text('clickedMessage', 'Theme Mode')}
   />
)
knobs.story = {
   decorators: [withKnobs]
}
