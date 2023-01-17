import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import MyCodingJourney from "./MyCodingJourney"
import TheBeforeDays from "./TheBeforeDays"

const Aboutme = () => {
    return (
        <div className="Content">
            <h1>Let's Talk About <span style={{color: "rgb(147, 4, 147)"}}>Seth</span> For A Second</h1>
            {/* left side of page, bio */}
            <div className="ABContent">
                <div className="ABLeft">
                    
                    <div>
                        <Link to="/MyCodingJourney">My Coding Journey</Link>
                        <Link to="/TheBeforeDays">The Before Days</Link>
                    </div>

                    <Routes>
                        <Route path='/MyCodingJourney' element={<MyCodingJourney />} />
                        <Route path='/TheBeforeDays' element={<TheBeforeDays />} />
                    </Routes>
                    
                </div>
                {/* right side of page, fav list and ??? */}
                <div className="ABRight">
                  <h3>Quick Facts</h3>
                  <p>Favorite Language: C#</p>
                  <p>First Coding Language: Python</p>
                  <p>Location: Seattle, WA</p>
                  <p>Born: Anchorage, AK</p>
                  <p>Favorite Meal: Panang Curry</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
