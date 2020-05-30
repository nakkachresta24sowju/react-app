import React from 'react'
import withScreenSizeDetectors from '../../Common/hocs/withScreenSizeDetectors'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
type Props = {
   isMobile: any
   isTablet: any
   isDesktop: any
}
@observer
class DeviceTypeText extends React.Component<Props> {
   @observable isMobileText
   @observable isTabletText
   @observable isDesktopText
   deviceType = () => {
      const { isMobile, isTablet, isDesktop } = this.props
      if (isMobile) {
         this.isMobileText = 'Mobile'
         return this.isMobileText
      } else if (isTablet) {
         this.isTabletText = 'Tablet'
         return this.isTabletText
      } else if (isDesktop) {
         this.isDesktopText = 'Desktop'
         return this.isDesktopText
      }
   }
   render() {
      return (
         <div className='bg-gray-300 w-full h-24'>
            <h2>Device Type Text</h2>
            <span>Device Type:{this.deviceType()}</span>
         </div>
      )
   }
}
export default withScreenSizeDetectors(DeviceTypeText)
