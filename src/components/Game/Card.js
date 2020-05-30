import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { text } from '@storybook/addon-knobs'
const label = 'ImageStyle'
const cardImage =
   'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png'
const groupId = '123'
const label1 = 'imageStyles'
const label2 = 'containerStyles'
const label3 = 'emojiTextStyles'
const separator = ','

class Card extends React.Component {
   render() {
      const { EmojiName } = this.props
      return (
         <div
            className={text(
               'label2',
               'flex flex-col justify-center items-center ',
               'separator'
            )}
         >
            <img
               className={text(
                  'label1',
                  'w- h-32 border hover:bg-indigo-600',
                  'separator'
               )}
               src={text(label, cardImage, groupId)}
            ></img>
            <span className={text('label3', ' hover:bg-pink-600', 'separator')}>
               {EmojiName}
            </span>
         </div>
      )
   }
}
export default Card
