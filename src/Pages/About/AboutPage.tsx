import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";

function AboutPage() {    
    return (<div className="App">
        <HeaderMenu />
        <div className="about-page">
            <div className="half">
                <h1>About</h1>
                <p>Watch this space</p>
            </div>
        </div>
    </div>)
}

export default AboutPage;