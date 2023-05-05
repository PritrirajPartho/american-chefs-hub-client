import React, { useState } from 'react';
import './Recipes.css';
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({recipe}) => {
    const{name,img, id, ingredients, method, rating} = recipe;
    const [isDisabled, setIsDisabled] = useState(false);
    const notify = () => {
        toast("the recipe is added to your favorite!!");
        setIsDisabled(true)
        console.log(isDisabled);
    };

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
                    <button  onClick={notify}  disabled={isDisabled} className='ms-5 w-50 h-50 btn-favourite'><Icon    icon="icon-park-solid:love-and-help" /> <ToastContainer/></button>
                    
                </div>
             </div>
        </div>
    );
};

export default Recipes;