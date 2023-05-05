import React from "react";
import { Icon } from "@iconify/react";
import './ChefsShow.css';
import { Link } from "react-router-dom";

const ChefsShow = ({chef}) => {
    const { id, name, img, experience, likes, recipes} = chef;
    return (
        <div className="chef bg-info">
        <div>
            <img src={img} alt="" />
        </div>
        <div className="chef-text">
            <h2>{name}</h2>
            <h4>Experience:   {experience}</h4>
            <h4>Recipes:   {recipes.length}</h4>
        </div>
        <div className="icon-part">
            <p>
                <Icon className="fs-1" icon="mdi:thumb-up" />
                 <span className="likes">{likes}</span>
            </p>
            <p>
                <Link to={`/chefs/${id}`}><button className="ms-4 bg-warning text-dark fw-bold border-0 mt-1 px-2 py-1 rounded">View-Recipes</button></Link>
            </p>
        </div>
    </div>
    );
};

export default ChefsShow;