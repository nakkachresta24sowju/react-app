import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { text } from '@storybook/addon-knobs'
const label = 'ButtonStyles'
const label1 = 'paragraphStyles'
const label2 = 'containerStyles'
const separator = ','

class BaseButton extends React.Component {
   render() {
      const { clickedMessage, onPlayAgainClick } = this.props
      return (
         <div
            className={text(
               'label2',
               'flex flex-col justify-center items-center ',
               'separator'
            )}
         >
            <p
               className={text(
                  'label1',
                  ' text-4xl hover:bg-indigo-600 ',
                  'separator'
               )}
            >
               {clickedMessage}
            </p>
            <button
               className={text(
                  'label',
                  'bg-indigo-500 rounded-sm text-white px-6 h-12 text-2xl hover:bg-indigo-600',
                  'separator'
               )}
               onClick={onPlayAgainClick}
            >
               Play Again
            </button>
         </div>
      )
   }
}
export default BaseButton
