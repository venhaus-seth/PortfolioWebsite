import React from 'react'
import { Player} from 'video-react'
import Fact from "../Views/Fact.mp4"


const FactVideo = () => {
  return (
    <Player  
        playsInline
        fluid={false}
        width={500}
        height={235}
        src={Fact}
        />
  )
}

export default FactVideo