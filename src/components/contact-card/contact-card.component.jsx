import React from 'react';
import pic from './pic2.png';
import './contact-card.styles.css'

const ContactCard = () => (
 
    <aside className="profile-card">
    <header>
     
      <div id="picture">
        <img src={pic} className="hoverZoomLink" />
      </div>
  
   
      <h1>
              Edgard Henrikson
            </h1>
      
      <h2>
             Front-end developer
            </h2>
  
    </header>
  
   
    <div className="profile-bio">
  
      <p className="contact-text">
        Contact me on LinkedIn!
      </p>
  
    </div>
  
 
    {/* <ul class="profile-social-links">
      <li>
        <a target="_blank" href="https://www.facebook.com/creativedonut">
        <i class="fab fa-linkedin-in"></i>

        </a>
      </li>
     
    </ul> */}

<div className="social-media profile-social-links ">
    <div className="linkedin">
    <a href="https://www.linkedin.com/in/edgard-ruben-henrikson-b7102a11a/"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
    </div>
  </div>

  </aside>


);

export default ContactCard;


