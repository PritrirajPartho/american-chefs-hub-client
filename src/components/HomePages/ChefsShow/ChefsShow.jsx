import React from "react";
import { Icon } from "@iconify/react";
import './ChefsShow.css';
import { Link } from "react-router-dom";

const ChefsShow = ({chef}) => {
    const { id, name, img, experience, likes, recipes} = chef;
    return (
        <div className="chef">
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
                <Icon icon="mdi:thumb-up" />
                  {likes}
            </p>
            <p>
                <Link to={`/chefs/${id}`}><Icon className="eye-btn"    icon="streamline:interface-edit-view-eye-eyeball-open-view" /></Link>
                recipes
            </p>
        </div>
    </div>
    );
};

export default ChefsShow;