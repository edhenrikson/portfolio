import React from 'react';


import './header.styles.scss'

const Header = (props) => (

    <div className="header">

        <h1>{props.title}</h1>
    </div>


);

export default Header;
