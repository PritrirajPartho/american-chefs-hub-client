import React from 'react';
import {useLoaderData} from "react-router-dom";

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    const{id, name, img, experience, bio, recipes, view, likes, } = chef;
    return (
      <section>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>Name: {name}</h1>
            {/* {recipes.map(r => <ul key={r.length}>
                <li>{r}</li>
            </ul>)} */}
            <p>Bio: {bio}</p>
        </div>
        <div>
            <p>Experience: {experience}</p>
             <p>
                <span>{likes}</span>
                <span>Recipes Quantity: {recipes.length}</span >
             </p>
        </div>
      </section>
    );
};

export default ChefDetails;