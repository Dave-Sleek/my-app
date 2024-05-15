import React from "react";
import { Link } from "react-router-dom";
//import { ThemeContext } from '../App.js';

function Hero() {

    return (
        <div className="container">
            <div className="hello">
                <h1 className="Welcome"> Welcome!!!
                <span className="Welcome2"> This is </span> My GitHub Portfolio</h1>


            </div>

            <img src="/src/components/backgroundimg.png" alt=""/>
        </div>
    )
}

export default Hero