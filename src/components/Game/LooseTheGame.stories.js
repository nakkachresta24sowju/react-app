import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import '../../../src/styles/tailwind.css'
import BaseButton from './BaseButton.js'

export default {
   component: BaseButton,
   title: 'Common/LooseTheGame'
}

export const defaultView = () => <BaseButton />

export const PlayAgainClick = () => (
   <BaseButton
      onPlayAgainClick={action('playAgain clicked')}
      clickedMessage={'Clicked'}
   />
)
export const knobs = () => (
   <BaseButton
      onPlayAgainClick={action('playAgain clicked')}
      clickedMessage={text('clickedMessage', 'Play Again')}
   />
)
knobs.story = {
   decorators: [withKnobs]
}
