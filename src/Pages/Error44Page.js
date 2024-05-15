import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404Page = () => {
  return (
    <div className="error-page">
            <h1> oops! Page not found</h1>
            <img
        src={require("../errorpage.png")}
        alt="error404page"
      />

            <NavLink to="/">Home</NavLink>
            </div>
  )
  
}

export default Error404Page