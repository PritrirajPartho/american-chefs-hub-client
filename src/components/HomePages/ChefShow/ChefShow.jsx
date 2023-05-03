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
        <div>
            <h2>{name}</h2>
            <h4>{experience}</h4>
            <h4>{recipes.length}</h4>
        </div>
        <div>
            <p>
            <Icon icon="mdi:thumb-up" />
            {likes}
            </p>
            <p>
                <button>
                    <Icon icon="streamline:interface-edit-view-eye-eyeball-open-view" />
                </button>
                recipes
            </p>
        </div>
    </div>
  );
};
export default ChefShow;
