import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import '../../../src/styles/tailwind.css'
import Card from './Card.js'

export default {
   component: Card,
   title: 'Common/EmojiCard'
}

export const defaultView = () => <Card EmojiName={'Exploding Head'} />

export const CardClickable = () => <Card EmojiName={'Exploding Head'} />
export const knobs = () => (
   <Card EmojiName={text('EmojiName', 'Exploding Head')} />
)
knobs.story = {
   decorators: [withKnobs]
}
