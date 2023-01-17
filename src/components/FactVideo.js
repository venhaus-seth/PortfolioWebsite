import React from 'react'
import { Player} from 'video-react'


const FactVideo = () => {
  return (
    <Player  
        playsInline
        fluid={false}
        width={500}
        height={200}
        src='https://www.youtube.com/watch?v=UT5F9AXjwhg'
        />
  )
}

export default FactVideo