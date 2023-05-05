import React from "react";
import { Icon } from "@iconify/react";
import './ChefsShow.css';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefsShow = ({chef}) => {
    const { id, name, img, experience, likes, recipes} = chef;
    return (
        <div className="chef bg-info">
                <div >
                    <LazyLoad  className="img-chef-div">
                        <img src={img} alt="" />
                    </LazyLoad>
                </div>
                <div className="chef-text">
                    <h2>{name}</h2>
                    <h4>Experience:   {experience}</h4>
                    <h4>Recipes:   {recipes.length}</h4>
                </div>
                <div className="icon-part">
                    <p className="d-flex ms-5">
                        <Icon className="fs-1 mt-2" icon="mdi:thumb-up" />
                        <span className="likes">{likes}</span>
                    </p>
                    <p>
                        <Link to={`/chefs/${id}`}><button className="ms-1 me-5 mt-2 bg-warning text-dark fw-bold border-0 mt-1 px-2 py-1 rounded">View-Recipes</button></Link>
                    </p>
                </div>
        </div>
    );
};

export default ChefsShow;