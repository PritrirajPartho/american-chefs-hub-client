import React, { useEffect, useState } from "react";
import ChefShow from "../ChefShow/ChefShow";

const Chefs = () => {
  const[chefs, setChefs] = useState([])
  useEffect(() =>{
    fetch('http://localhost:5000/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
  },[]) 


  return (
    <div>
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
