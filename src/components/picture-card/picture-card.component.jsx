import React from 'react';

import { Link } from 'react-router-dom';
import './picture-card.styles.scss'

const PictureCard = (props) => (

    <div className={props.className} >
       
        <Link to={props.to} >
        <div className="cont">
            <img src={props.source} />
            
            <div className="overlay">
                <div className="text">{props.text}</div>
                <div className="text2">{props.text2}</div>
            </div>
            </div>
        </Link>
        
    </div>
    

);

export default PictureCard;
