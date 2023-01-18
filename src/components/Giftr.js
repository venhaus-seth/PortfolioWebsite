import React from 'react'
import GiftrVideo from './GiftrVideo'

const Giftr = () => {
  return (
    <div className='PRightSideContent'>

      <h1 className="subHeaderFont">Giftr</h1>

      <div className='PIndividualContent'>

        <div className='PMadeWith'>
          <strong>Made with:</strong>
          <p>C#</p>
          <p>ASP.NET Core</p>
          <p>MYSQL</p>
          <p>CSS</p>
          <p>Bootstrap</p>
        </div>

        <div className='PDescription'>

          <p>Giftr is a simple app that streamlines your Gift Exchanges. Whether with family, friends, or coworkers - Giftr provides a commonspace to safely share your wishlist.</p>

          <p>Giftr employs C#'s OOP function to provide scalability, and reduce redundant code. This website's safety is handled with ASP.Net Core’s model validation and session. Giftr is connected to a MYSQL database to enable structured and relational data storage. The Front-end design was built using a combination of CSS and Bootstrap.
          </p>
          
        </div>
        
      </div>

      <div className='video'>
        <GiftrVideo/>
      </div>
      
    </div>
  )
}

export default Giftr