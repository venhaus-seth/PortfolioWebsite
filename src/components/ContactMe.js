import React from 'react'

const ContactMe = () => {
  return (
    <div className='Content'>

      <h1>Let's Connect!</h1>

      <div className='CMContent'>

        <div className='CMLeft'>

          <a href="https://www.linkedin.com/in/seth-venhaus-347486183/" className='CMLeftLinks'>
            <img className="icon" src="https://cdn.onlinewebfonts.com/svg/img_24748.png" alt="LinkedIn Icon"/>  
            <p className='Link'>LinkedIn</p>
          </a>
          
          <a href="https://github.com/venhaus-seth" className='CMLeftLinks'>
            <img className="icon" src="https://spng.pinpng.com/pngs/s/19-198450_github-icon-png-github-icon-transparent-png.png" alt="GitHub Icon"/>
            <p className='Link'>Github</p>
          </a>
          
          <div className='CMLeftLinks'>
            <img className="icon" src={require("../Views/Images/Email.png")} alt="email Icon"/>
            <p className='L'>venhaus.seth@gmail.com</p>
          </div>

          <div className='CMLeftLinks'>
            <img className="icon" src="https://openclipart.org/image/2400px/svg_to_png/185269/phone-icon.png" alt="email Icon"/>
            <p className='L'>(907) 854-4049</p>
          </div>

          <div className='CMLeftLinks'>
            <img className="icon" src="http://cdn.onlinewebfonts.com/svg/img_431836.png" alt="email Icon"/>
            <p className='L'>Seattle, WA</p>
          </div>

          <button className='ResumeBtn'>
            <img className='DLIcon' src="https://icon-library.com/images/download-icon-png/download-icon-png-8.jpg" alt="email Icon"/>
            <p className='L'>Resume</p>
          </button>

        </div>

        <div className='CMRight'>
          <p>Coming soon!</p>
        </div>

      </div>

    </div>
  )
}

export default ContactMe