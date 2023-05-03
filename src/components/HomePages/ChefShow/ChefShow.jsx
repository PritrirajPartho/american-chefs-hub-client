import React from "react";
import { Icon } from "@iconify/react";
import './ChefShow.css';

const ChefShow = ({ chef }) => {
  const { id, name, img, experience, likes, recipes, view } = chef;
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
                <Icon className="eye-btn"    icon="streamline:interface-edit-view-eye-eyeball-open-view" />
                recipes
            </p>
        </div>
    </div>
  );
};
export default ChefShow;
