import React from 'react';



import './portfolio-left.styles.scss'

const PortfolioCardLeft = (props) => (




    <div className="blog-card alt">
        <div className="meta">
            <div className="photo" style={props.image}></div>
            <ul className="details">
                <li >This project uses:</li>
                <li className="tags">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>ExpressJS</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                       


                    </ul>
                </li>
            </ul>
        </div>
        <div className="description">
            <h1>{props.cardtitle}</h1>

            <p>{props.description}</p>
            <p className="read-more">
            <a href={props.link}>Visit</a>
            </p>
        </div>
    </div>
);

export default PortfolioCardLeft;