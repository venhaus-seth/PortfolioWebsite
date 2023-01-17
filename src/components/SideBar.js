import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const SideBar = () => {
  return (
    <div className="SideBar">
        <div className="imgContainer">
            <img className="img" src="https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api" alt="Image of Seth"/>
            <p>Andrew "Seth" Venhaus</p>
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
            <Link className="Link" to='/aboutMe'>About Me</Link>
            <Link className="Link" to='/projects'>Projects</Link>
            <Link className="Link" to='/skills'>Technical Skills</Link>
            <Link className="Link" to='/contactme'>Contact Me</Link>
        </div>
    </div>
  )
}

export default SideBar