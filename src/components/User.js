import React from "react";
//import {Link} from "react-router-dom";
//import { ThemeContext } from '../App';

const User = ({ id, name, description, chooseRepo, html_url }) => {
  
  
  return (
    // <Link to={`/portfolio/${id}`}>
      <div className="id"
        
        id="user-data"
        style={{
          border: "2px",
          borderRadius: "10px",
          textAlign:"center",
        }}
        onClick={chooseRepo}
      >
        <article key={id}>
          <h3>{name}</h3>
          <p>{description}</p>
          <a href={html_url}>
          <button style={{border:'1px '}}>Click</button>
          </a>
        </article>
      </div>
    // </Link>
  );
};

export default User;