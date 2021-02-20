import React from 'react';
import AboutContainer from "../../components/about-box/about-box";
import ListBox from "../../components/list-box/list-box.component";

import NavBar from '../../components/navbar/navbar.component'


import './about.styles.scss'

const AboutPage = () => (
    <div>
        <NavBar />
        <div className="big-div">
            <AboutContainer />
        </div>
        <div className="bottom-about">
           <ListBox />
        </div>

    </div>



);

export default AboutPage;