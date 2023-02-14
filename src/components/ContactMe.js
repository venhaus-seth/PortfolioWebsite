import React from 'react'
import Resume from '../Views/Seth.Venhaus.Jan2023.pdf'

const ContactMe = () => {
  return (
    <div className='Content'>

      <h1 className='headerFont'>Let's Connect!</h1>

      <div className='CMBlurb'>
        
        <p>I'd love to connect! Find me on <strong>LinkedIn</strong> or <strong>Github</strong> to see what I've been up to lately!</p>
        <p>I'm also interested in finding full-time employment as of January 2023. If you think I would be a good fit for a role, please don't hesitate to reach out to me!</p>

      </div>
      
      <div className='CMContent'>        

        <div className='CMRight'>
          
          <a href="https://www.linkedin.com/in/seth-venhaus-347486183/" className='CMLinks'>
            <img className="icon" src="https://cdn.onlinewebfonts.com/svg/img_24748.png" alt="LinkedIn Icon"/>  
            <p className='Link'>LinkedIn</p>
          </a>
          
          <a href="https://github.com/venhaus-seth" className='CMLinks'>
            <img className="icon" src="https://spng.pinpng.com/pngs/s/19-198450_github-icon-png-github-icon-transparent-png.png" alt="GitHub Icon"/>
            <p className='Link'>Github</p>
          </a>

          <a href={Resume} download="Resume" target='_blank' className='PurpleBtn'>
            <img className='DLIcon' src="https://icon-library.com/images/download-icon-png/download-icon-png-8.jpg" alt="email Icon"/>
            <p className='ResumeText'>Resume</p>
          </a>

        </div>

        <div className='CMLeft'>

          <div className='CMLinks'>
            <img className="icon" src={require("../Views/Images/Email.png")} alt="email Icon"/>
            <p className='L'>venhaus.seth@gmail.com</p>
          </div>

          <div className='CMLinks'>
            <img className="icon" src="https://openclipart.org/image/2400px/svg_to_png/185269/phone-icon.png" alt="email Icon"/>
            <p className='L'>(907) 854-4049</p>
          </div>

          <div className='CMLinks'>
            <img className="icon" src="http://cdn.onlinewebfonts.com/svg/img_431836.png" alt="email Icon"/>
            <p className='L'>Seattle, WA</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ContactMe