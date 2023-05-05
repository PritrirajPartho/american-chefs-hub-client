import React from "react";
import { useLoaderData } from "react-router-dom";
import './ChefDetails.css';
import Recipes from "../Recipes/Recipes";
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const { id, name, img, experience, bio, recipes, view, likes, works } = chef;
  return (
    <section>
      <div className="chef-details-container">
            <div>
                  <LazyLoad>
                    <img src={img} alt="" />
                  </LazyLoad>
            </div>
            <div className="mt-4">
                <h1><strong className="me-2">Name:</strong>{name}</h1>
                <p><strong className="me-2">Bio:</strong>{bio}</p>
            </div>
            <div  className="mt-4">
            <p><strong className="me-2">Experience:</strong>{experience}</p>
            <p>
                <span><strong className="me-2">Recipes-Quantity:</strong>{recipes.length}</span>
            </p>
            <p><strong className="me-2">People likes:</strong>{likes}</p>
            </div>
      </div>
      <div className="recipe-container">
            {
                works.map(recipe => <Recipes key={recipe.id} recipe={recipe}></Recipes>)
            }
      </div>
    </section>
  );
};

export default ChefDetails;
