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

          <p> I leveraged React to create a responsive website for user interaction while minimizing page redirects and refreshes. I utilized Bootstrap to design a simple, yet inviting interface to improve UX. I connected this project to MongoDB to securely and flexibly handle data. Lastly, I assembled the project's back-end with JavaScript and Express. All facts are generated through the <a href='https://api-ninjas.com/api/facts'>Fact Ninja API.</a> </p>
        </div>
      </div>
      <div className='video'>
        <FactVideo/>
      </div>
    </div>
  )
}

export default FactGenerator