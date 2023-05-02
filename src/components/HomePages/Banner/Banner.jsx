import React from "react";
import './Banner.css';
import imgbanner from '../../../assets/images/single-2.jpeg';

const Banner = () => {
  return (
    <div className="banner-contaniner">
        <div>
            <h1><span className="text-info">Cook Smarter With</span><br/><span className="text-warning">American-Chefs-Hub</span></h1>
            <p>
                A chef is a highly trained and skilled professional cook who is <br/>
                proficient in all aspects of food preparation of a particular cuisine
            </p>       
        </div>
        <div>
            <img src={imgbanner} alt="" />
        </div>
    </div>
  );
};

export default Banner;
