import React from 'react'
import FactVideo from './FactVideo'

const FactGenerator = () => {
  return (
    <div className='PRightSideContent'>

      <h1 className="subHeaderFont">Fact Generator</h1>

      <div className='PIndividualContent'>

        <div className='PMadeWith'>

          <strong>Made with:</strong>
          <p>C#</p>
          <p>ASP.NET Core</p>
          <p>MYSQL</p>
          <p>CSS</p>
          <p>Bootstrap</p>
        </div>
        <p className='PDescription'> DESCription Osdadsf dsfgdfg dfgdf gdfds dfsdf sdfsdfsdf sdfsfsd sdfsdf sdfsdgsthw hwtrba faerhae fgdfgdfgDFJSDNFKJSD FKSJD FKSJD FKSDJF SJDFKJ</p>
        
      </div>
      <div className='video'>
        <FactVideo/>
      </div>
    </div>
  )
}

export default FactGenerator