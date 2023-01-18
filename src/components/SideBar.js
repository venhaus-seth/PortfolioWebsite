import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import Seth from '../Views/Images/Seth.png'

const SideBar = () => {
  return (
    <div className="SideBar">
        <div className="imgContainer">
            <img className="img" src={Seth} alt="Image of Seth"/>
            <h2>Andrew "Seth" Venhaus</h2>
            <div className="IconBar">
            
                <a href="https://www.linkedin.com/in/seth-venhaus-347486183/">
                    <img className="icon" src="https://cdn.onlinewebfonts.com/svg/img_24748.png" alt="LinkedIn Icon"/>
                </a>
                <a href="https://github.com/venhaus-seth">
                    <img className="icon" src="https://spng.pinpng.com/pngs/s/19-198450_github-icon-png-github-icon-transparent-png.png" alt="GitHub Icon"/>
                </a>
            </div>
        </div>
        <div className="LinksContainer">
            <Link className="PurpleBtn" to='/aboutMe'>About Me</Link>
            <Link className="PurpleBtn" to='/projects'>Projects</Link>
            <Link className="PurpleBtn" to='/skills'>Technical Skills</Link>
            <Link className="PurpleBtn" to='/contactme'>Contact Me</Link>
        </div>
    </div>
  )
}

export default SideBar