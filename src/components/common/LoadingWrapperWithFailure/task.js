import React from 'react'
import { TaskContainer } from './styledComponents'
class Task extends React.Component {
   render() {
      const { textValue, colorValue } = this.props
      return (
         <TaskContainer style={{ backgroundColor: colorValue }}>
            <p>{textValue}</p>
         </TaskContainer>
      )
   }
}

export default Task
