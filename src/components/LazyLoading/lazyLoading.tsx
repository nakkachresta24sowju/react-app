import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import images from './images.json'
class LazyLoadingTechnique extends React.Component {
   render() {
      return (
         <div>
            {images.map(image => (
               <LazyLoadImage
                  alt={image.alt}
                  src={image.src}
                  width={1000}
                  height={1000}
               />
            ))}
         </div>
      )
   }
}

export default LazyLoadingTechnique
