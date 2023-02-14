import React from 'react'
import FactVideo from './FactVideo'

const FactGenerator = () => {
  return (
    <div className='PLeftSideContent'>

      <h1 className="subHeaderFont">Fact Generator</h1>

      <div className='PIndividualContent'>

        <div className='MadeWith'>

          <strong>Made with:</strong>
          <p>JavaScript</p>
          <p>Express</p>
          <p>React</p>
          <p>Bootstrap</p>
          <p>MongoDB</p>
        </div>
        <div className='Description'>
          <p> My Fact Generator application stays true to its name. This application generates random facts for you, which you are able to save into a favorites list. </p>

          <p> This application was built with JavaScript, Express, React, Bootstrap, and MongoDB. </p>
          <p>I build this application to get more familiar with API calls, the React framework, and full-stack JavaScript projects.</p>
        </div>
      </div>
      <div className='video'>
        <FactVideo/>
      </div>
    </div>
  )
}

export default FactGenerator