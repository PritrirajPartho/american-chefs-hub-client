import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import ChefList from "../ChefList/ChefList";
import Traffic from "../Traffic/Traffic";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Chefs></Chefs>
        <ChefList></ChefList>
        <Traffic></Traffic>
    </div>
  );
};

export default Home;
