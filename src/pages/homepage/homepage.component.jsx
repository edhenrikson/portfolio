import React from 'react';

import PictureCard from '../../components/picture-card/picture-card.component'
import Imagen1 from '../homepage/ed.png';
import about from '../homepage/about.jpg';

import './homepage.styles.scss'

const HomePage = () => (

  <div className="container">
  <span>
  <div className="cards">

    <PictureCard className="agrid typewriter"  source={Imagen1} text={"Hello!\nI'm Edgard Henrikson.\n" } text2={"Front-end developer"}/>
   
    <PictureCard className="bgrid grid" to="/portfolio" text="My work" source="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
   
    <PictureCard className="cgrid grid" to="/about" source={about} text="About me" />
   
    <PictureCard className="dgrid grid" to="/contact" text="Contact me" source="https://images.unsplash.com/photo-1611264327630-8090373c8cef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80"/>
    
  </div>
  </span>
  </div>
);

export default HomePage;