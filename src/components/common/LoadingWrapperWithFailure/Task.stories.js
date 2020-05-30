import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { color } from '@storybook/addon-knobs'
import '../../../../src/styles/tailwind.css'
import Task from './task'

const label = 'Your Name'
const default1Value = 'James'
// const groupId = 'GROUP-ID1'

const color1 = 'Color'
const defaultValue1 = '#ff00ff'
// const groupId1 = 'GROUP-ID2'

export default {
   component: Task,
   title: 'Common/Task'
}

export const defaultValue = () => <Task />
export const knobs = () => (
   <Task
      colorValue={color(color1, defaultValue1)}
      textValue={text(label, default1Value)}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
