import React from "react";

const Aboutme = () => {
    return (
        <div className="Content">
            <h1>Let's Talk About <span style={{color: "rgb(147, 4, 147)"}}>Seth</span> For A Second</h1>
            {/* left side of page, bio */}
            <div className="ABContent">
                <div className="ABLeft">
                    <h3>My Coding Journey</h3>
                    <strong></strong>
                    <p>Hi, my name is Seth and I am a <strong>software developer</strong>. I started my journey into coding in 2021. I taught myself <strong>Python, JavaScript, and HTML</strong> while I worked in my previous field. Quickly, I realized that I loved the <strong>creativity and problem solving</strong> nature of coding. Before I knew it, I was enrolled in an <strong>online, full-stack software development</strong> program at the Coding Dojo!</p>

                    <p>My time at the <strong>Coding Dojo</strong> was focused on <strong>understanding, debugging, and building</strong> full-stack web applications. We learned how to do this in 3 languages – <strong>Python, JavaScript, and C#</strong>. After <strong>14 weeks</strong> of immersive learning and with <strong>1000+ hours</strong> of coursework I graduated and received my software development certificate!</p>

                    <h3>The Before Years</h3>
                    <p>I was born, raise, and educated in Anchorage, AK. Despite taking a year and half hiatus from college, I graduated from the University of Alaska, Anchorage in 2019 with a Bachelors in Business Administration and a concentration in Property Management. </p>
                    <p>I began working for my previous employer - Weidner Apartment Homes - in 2018. I started out as a part-time floating leasing agent while i finished my last year of school. I quickly learned the industry and jumped at the opportunity to transfer to Seattle, WA and pursue the role of property manager.</p>
                    <p>While I excelled in the property management industry, I found myself wanted to learn again. After considering a few options, I landed on software development.</p>
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
