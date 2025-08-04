import React from 'react'
import{Link} from "react-router-dom";
import BannerImage from '../assets/background.webp'
import "../styles/Home.css";


function Home() {
  return (
    <div className='home'  style={{backgroundImage:`url(${BannerImage})`}}> 
    <div className='headerContainer'>
        <h1>Adidas</h1>
        <p>Put on your Adidas and step off</p>
        <Link to="/menu">
        <button>Order now</button>
        </Link>
         
    </div>
    
    </div>

  );
}

export default Home;