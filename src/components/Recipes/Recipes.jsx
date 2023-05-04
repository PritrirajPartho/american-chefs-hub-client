import React, { useState } from 'react';
import './Recipes.css';
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({recipe}) => {
    const notify = () => toast("the recipe is added to your favorite!!");
    const{name,img, id, ingredients, method, rating} = recipe;
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div className='recipes-card'>
             <img className='mt-5 rounded mb-3'  src={img} alt="" />
             <h4>{name}</h4>
              <ul className='mt-3'>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
              </ul>
             <div>
                <p>method:{method.slice(0, 40)}....</p>
                <div className='d-flex'>
                    <span>rating:   {rating}</span>
                    <p className='ms-5 w-50 h-50'  disabled={isDisabled}> <Icon  onClick={notify}    icon="icon-park-solid:love-and-help" /> <ToastContainer/></p>
                </div>
             </div>
        </div>
    );
};

export default Recipes;