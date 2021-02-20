import React from 'react';


import './list-box.styles.css'


const ListBox = () => (

<div>
    <div className="about-box">
    <div className="row align-items-center"></div>
    <h1 className="tech-title">Technologies I have worked with:</h1>
    <div className="wrap">
        <div className="cont-one">
        <div className="box box1 shadow1">
            <h3>React <i class="fab fa-react"></i></h3>
        </div>
        <div className="box box2 shadow2">
            <h3>Javascript <i class="fab fa-js-square"></i></h3>
        </div>
        <div className="box box3 shadow3">
            <h3>HTML5 <i class="fab fa-html5"></i></h3>
        </div>
        <div className="box box4 shadow4">
            <h3>CSS3 <i class="fab fa-css3-alt"></i></h3>
        </div>
        </div>
        <div className="cont-two">
        <div className="box box5 shadow5">
            <h3>Sass <i class="fab fa-sass"></i></h3>
        </div>

        <div className="box box4 shadow4">
            <h3>MongoDB</h3>
        </div>
        <div className="box box6 shadow6">
            <h3>Node.js <i class="fab fa-node"></i></h3>
        </div>
        <div className="box box7 shadow7">
            <h3>ExpressJS</h3>
        </div>
        <div className="box box8 shadow4">
            <h3>Firebase</h3>
        </div>
        <div className="box ">
            <h3></h3>
        </div>
        <div className="box box1 shadow1">
            <h3>Stripe</h3>
        </div>

        </div>
    </div>

    </div>
      
      </div>
      
    
       
    
      
);

export default ListBox