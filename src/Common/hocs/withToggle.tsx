import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

const withToggle = WrappedComponent => {
   @observer
   class newComponent extends React.Component {
      @observable toggleStatus: boolean = false
      onToggle = () => {
         this.toggleStatus = !this.toggleStatus
      }
      render() {
         return (
            <WrappedComponent
               toggleStatus={this.toggleStatus}
               onToggle={this.onToggle}
            />
         )
      }
   }
   return newComponent
}
export default withToggle
