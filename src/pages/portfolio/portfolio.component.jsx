import React from 'react';
import PortfolioCard from '../../components/portfolio-card/portfolio-card.component';
import PortfolioCardLeft from '../../components/portfolio-card-left/portfolio-left.component';
import crown from "../../assets/CROWN.png"
import camp from "../../assets/CAMP.png"
import NavBar from '../../components/navbar/navbar.component'
import './portfolio.styles.scss'

const PortfolioPage = () => (
<div>
        <NavBar />
        <div className="port-grid">
            <div>
                <PortfolioCard description="E-commerce website built using React. This project was built mainly as a portfolio project. It does not sell real products" 
                cardtitle="Crown Market Clothes" 
                image={{backgroundImage: `url(${crown})`}}
                link="https://crown-market-clothes.herokuapp.com/"
                />
            </div>
            <div>
                <PortfolioCardLeft description="Yelp like site, where you create a user, add campground sites, upload pictures, review them and see their geolocation on a map" 
                cardtitle="YelpCamp" 
                image={{backgroundImage: `url(${camp})`}}
                link="https://floating-atoll-48989.herokuapp.com/"
                />
            </div>
        </div>
   
        </div>

);

export default PortfolioPage;