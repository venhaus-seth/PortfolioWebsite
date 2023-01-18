import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import MyCodingJourney from "./MyCodingJourney"
import TheBeforeDays from "./TheBeforeDays"

const AboutMe = () => {
    return (
        <div className="Content">
            <h1>Let's Talk About <span style={{color: "rgb(147, 4, 147)"}}>Seth</span> For A Second</h1>
            {/* left side of page, bio */}
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
                {/* right side of page, fav list and ??? */}
                <div className="ABRight">
                  <h2>Quick Facts</h2>
                  <p><strong>Favorite Language:</strong> C#</p>
                  <p><strong>First Coding Language:</strong> Python</p>
                  <p><strong>Location:</strong> Seattle, WA</p>
                  <p><strong>Born:</strong> Anchorage, AK</p>
                  <p><strong>Favorite Meal:</strong> Panang Curry</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
