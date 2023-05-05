import React from "react";
import './Banner.css';
import imgbanner from '../../../assets/images/single.webp';

const Banner = () => {
  return (
    <div className="banner-contaniner">
        <div className="banner-text">
            <h1><span className="text-info mb-5">Cook Smarter With</span><br/><span className="text-warning mt-5">American-Chefs-Hub</span></h1>
            <p>
                Highly trained and skilled professional chefs who's is <br/>
                proficient in all aspects of food preparation of a particular cuisine.
            </p>   
            <button className="bg-info text-light px-4 py-3 fw-bold  fs-4 border-0 rounded mt-2">Get Started</button>    
        </div>
        <div className="banner-img-container">
            <img src={imgbanner} alt="" />
        </div>
    </div>
  );
};

export default Banner;
