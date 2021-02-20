import React from 'react';



import './portfolio-card.styles.scss'

const PortfolioCard = (props) => ( 


<div className="blog-card">
<div className="meta">
  <div className="photo" style={props.image}></div>
  <ul className="details">
  <li >This project uses:</li>
    <li className="tags">
      <ul>
        <li>React</li>
        <li>SASS</li>
        <li>Redux</li>
        <li>Hooks</li>
        <li>Firebase</li>
        <li>Stripe</li>
        
      
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

export default PortfolioCard;