import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {FaGithub, FaMedium, FaTwitter, FaFacebook} from "react-icons/fa"


function Profile({

  
  
  imgSrc = "./placeholderimage.jpeg",
  name,
  bio,
  location,
  followers,
  following,
  twitter_username,
  medium_username, 
  html_url,
}) {
  return (
    <>
    <HelmetProvider>
      <title>My Github Portfolio</title>
      <meta name="description" content="Frontend Developer" />
      <link rel="canonical" href="http://localhost:3000/portfolio/" />
    <div id="profile">
      <div id="profile-section">
      <div id="avatar">
        <img src={imgSrc} alt="Me" />
      </div>
      <h1 alt="profile name">{name}</h1>
      </div>
      <div id="profile-details">
        <div className="bio">
        <p>
          {bio}</p>
          <a href="https://github.com/users/Sammyjnr375"></a>
          </div>
          <div className="location">
          <p>{location}</p>
          </div>
       
        <div>
        <a href="https://github.com/Sammyjnr375">
          <button className="buttons"><FaGithub/> GitHub<i className="fa-brands fa-github"></i></button>
        </a>
        </div>

        {/* <div>
        <a href=" https://medium.com/@EMJCREATES">
        
        <button className="buttons"><FaMedium/> Medium<i className="fa-brands fa-medium"></i></button>
      </a>
        </div> */}
         
         {/* <div>
        <a href="https://twitter.com/jeweleni_diva/">
          <button className="buttons"><FaTwitter/> Twitter<i className="fa-brands fa-twitter"></i></button>
        </a>
        </div> */}

        <div>
        <a href=" https://facebook.com/">
        
        <button className="buttons"><FaFacebook/> facebook<i className="fa-brands fa-facebook"></i></button>
      </a>
        
        </div>

        <a href="https://github.com/Dave-Sleek?tab=following">
            <button className="buttons">Following: {following}</button>
          </a>
      </div>
      <a href="https://github.com/Sammyjnr375?tab=followers">
            <button className="buttons">
              Followers: {followers}
            </button>
          </a>
     
    </div>
    </HelmetProvider>
    </>
  );
}

export default Profile;