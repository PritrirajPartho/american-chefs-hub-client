import React, { useEffect, useState } from "react";
import './Chefs.css';
import ChefsShow from "../ChefsShow/ChefsShow";

const Chefs = () => {
  const[chefs, setChefs] = useState([])
  useEffect(() =>{
    fetch('https://chef-recipe-assignment-server-pritrirajpartho.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
  },[]) 


  return (
    <section className="mb-5">
          <h1 className="text-center mt-5 text-warning">See all Our Pro Chefs</h1>
          <div className="chefs-contaniner">
             {
                chefs.map(chef => <ChefsShow
                      key={chef.id}
                      chef={chef}
                >
                </ChefsShow>)
             }
          </div>
    </section>
  );
};

export default Chefs;
