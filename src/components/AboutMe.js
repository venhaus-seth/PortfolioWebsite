import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import MyCodingJourney from "./MyCodingJourney"
import TheBeforeDays from "./TheBeforeDays"

const AboutMe = () => {
    return (
        <div className="Content">

            <div className="mainHeaderBox">
                <small>Let's talk</small>
                <h1 className='mainHeaderFont'> About <span style={{color: "rgb(208, 181, 241)", textShadow: "2px 2px black"}}>Seth</span></h1>
                <small> For A Second</small>
            </div>
            

            {/* left side of page */}
            <div className="ABContent">

                <div className="ABLeft">
                    
                    <div className="ABHeader">
                        <Link className="PurpleBtn" to="MyCodingJourney">My Coding Journey</Link>
                        <Link className="PurpleBtn" to="TheBeforeDays">The Before Days</Link>
                    </div>
                    
                    <Routes>
                        <Route path="/" element={<MyCodingJourney />} />
                        <Route path='MyCodingJourney' element={<MyCodingJourney />} />
                        <Route path='TheBeforeDays' element={<TheBeforeDays />} />
                    </Routes>
                    
                </div>

            {/* right side of page */}
                <div className="ABRight">
                    <h2 className="subHeaderFont">Quick Facts</h2>
                    <p><strong>Favorite Language:</strong> C#</p>
                    <p><strong>First Coding Language:</strong> Python</p>
                    <p><strong>Location:</strong> Seattle, WA</p>
                    <p><strong>Born:</strong> Anchorage, AK</p>
                    <p><strong>Favorite Meal:</strong> Panang Curry</p>
                    <p><strong>Favorite Color:</strong>Purple</p>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;
