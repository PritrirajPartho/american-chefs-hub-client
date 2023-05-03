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
    <div className="chefs-contaniner">
            {
              chefs.map(chef => <ChefShow
                key={chef.id}
                chef={chef}
              ></ChefShow>)
            }
    </div>
  );
};

export default Chefs;