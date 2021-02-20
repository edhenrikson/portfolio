import React from 'react';
import { scroll } from './scroll'
import './about-box.styles.scss'

const AboutContainer = () => (

  <div>
    <div className="about-box">
      <div className="row align-items-center">
        <div className="col-4 right-div">

        </div>
        <div className="col-8 text-box ">
          <h1 className="title">A bit about me...</h1>
          <p className="about-text">
          I’m a dedicated and hardworking individual with a passion for programming. I hold a chemical engineering degree and worked in automotive before deciding to change career objectives. 
I’m currently living in Berlin, Germany.


          </p>
          <p className="about-text"> 
          I have been busy building my portfolio and increasing my subject knowledge of the programming world through and would be very pleased to talk you through my knowledge, future goals, and what technical and social skillset I could offer your organisation.
          </p>

          <p className="check-text">
          Check below too see the technologies I have used
          </p>
        </div>
        <div className="button-container">
          <button
            onClick={scroll}
          > <i class="arrow down"></i></button>
        </div>
      </div>

    </div>




  </div>







);

export default AboutContainer;