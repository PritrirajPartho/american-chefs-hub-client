import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import ChefList from "../ChefList/ChefList";
import Traffic from "../Traffic/Traffic";
import LazyLoad from 'react-lazy-load';
import { Spinner } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LazyLoad height={100}>
         <Spinner animation="border" variant="danger" />
      </LazyLoad>
      <Chefs></Chefs>
      <ChefList></ChefList>
      <Traffic></Traffic>
    </div>
  );
};

export default Home;
