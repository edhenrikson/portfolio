import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.styles.scss'

const NavBar = () => (

    <nav class="navbar navbar-expand-lg  fixed-top  container  ">
        
        <div class="collapse navbar-collapse d-flex justify-content-center " id="navLinks">
            <span className="logo navbar-brand"><i class="fab fa-etsy"></i></span>

            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <NavLink to="/" activeClassName="selected" className="nav-link" exact>
                        HOME
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/portfolio" activeClassName="selected" className="nav-link">
                        MY WORK
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/about" activeClassName="selected" className="nav-link">
                        ABOUT ME
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/contact" activeClassName="selected" className="nav-link">
                        CONTACT ME
                    </NavLink>
                </li>
            </ul>  

        </div>
    </nav >

 
   
)
export default NavBar;



