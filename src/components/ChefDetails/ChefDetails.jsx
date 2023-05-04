import React from "react";
import { useLoaderData } from "react-router-dom";
import './ChefDetails.css';
import Recipes from "../Recipes/Recipes";

const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const { id, name, img, experience, bio, recipes, view, likes, works } = chef;
  return (
    <section>
      <div className="chef-details-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="mt-4">
                <h1>Name: {name}</h1>
                <p>Bio:  {bio}</p>
            </div>
            <div  className="mt-4">
            <p>Experience:  {experience}</p>
            <p>
                <span>Recipes Quantity:  {recipes.length}</span>
            </p>
            <p>People likes:  {likes}</p>
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
