import React from 'react'
import { Player} from 'video-react'
import video from "../Views/Giftr.mp4"

const GiftrVideo = () => {
  return (
    <Player  
        playsInline
        fluid={false}
        width={500}
        height={235}
        src = {video} 
        />
  )
}

export default GiftrVideo