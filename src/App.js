
import './App.css';


import React from 'react';
import { Switch, Route} from "react-router-dom";

import PortfolioPage from "./pages/portfolio/portfolio.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/about.component";
import ContactPage from "./pages/contact/contact.component";


export default class App extends React.Component {
  render() {    
    return (
      
      <div className="app">
        
        
           
            <Switch>

          
              <Route exact component={HomePage} path="/" />
              <Route component={PortfolioPage} path="/portfolio" />
              <Route component={AboutPage} path="/about" />
              <Route component={ContactPage} path="/contact" />
              {/* <Route exactly component={Page1} pattern="/path1" />
              <Route exactly component={Page2} pattern="/path2" />
              <Route exactly component={Page3} pattern="/path3" />
              <Route component={Page404} /> */}
            </Switch>
          
      
        
      </div>
    );
  }
}