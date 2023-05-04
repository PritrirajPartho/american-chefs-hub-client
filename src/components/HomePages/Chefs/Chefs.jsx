import React, { useEffect, useState } from "react";
import ChefShow from "../ChefShow/ChefShow";
import './Chefs.css';

const Chefs = () => {
  const[chefs, setChefs] = useState([])
  useEffect(() =>{
    fetch('https://chef-recipe-assignment-server-pritrirajpartho.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
  },[]) 


  return (
    <section>
          <h1 className="text-center mt-5 text-warning">See all Pro Chefs......</h1>
          <div className="chefs-contaniner">
             {
                chefs.map(chef => <ChefShow
                  key={chef.id}
                  chef={chef}
                ></ChefShow>)
             }
          </div>
    </section>
  );
};

export default Chefs;
