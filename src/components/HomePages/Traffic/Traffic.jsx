import React from 'react';
import './Traffic.css';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../assets/images/bgc-two.jpeg'
import slide2 from '../../../assets/images/bgc-one.jpeg'
import slide3 from '../../../assets/images/single-2.jpeg'

const Traffic = () => {
    return (
      <section>
        <h1 className='text-center text-info mt-5 mb-4'>Take your Food to here!!</h1>
        <Carousel>
            <Carousel.Item >
            <img
                className="d-block w-100 h-50"
                src={slide1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First Recipe</h3>
                <p>healthy food is inventor of healthy life.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 h-100 "
                src={slide2}
                alt="Second slide"
            />
    
            <Carousel.Caption>
                <h3>Second Recipes</h3>
                <p>healthy food is inventor of healthy life.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 h-50"
                src={slide3}
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h3>Third Recipes</h3>
                <p>
                healthy food is inventor of healthy life.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </section>
    );
};

export default Traffic;