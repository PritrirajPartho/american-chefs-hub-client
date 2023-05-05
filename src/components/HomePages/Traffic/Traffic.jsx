
import React from 'react';
import './Traffic.css';

const Traffic = () => {
    return (
        <div className='mt-5 '>
            <h1 className='text-center text-warning mb-4 mt-5'>Our Achievement</h1> 
           <div className='suscribe'>
              <button className='bg-info px-3 py-2 fs-5 text-light border-0 me-4 rounded'>Subscribe</button>
              <input className='py-2 px-5 rounded' type="email" name="email" id="email" placeholder='enter your email' required />
           </div>
            <div className='our-achive'>
                <h1 className='me-5 ms-2 text-success'>Total Users: 20000+</h1>
                <h1 className='me-5 text-primary'>Total Subscriber: 1000+</h1>
                <h1 className='text-success'>Total Visitors: 200000+</h1>
            </div>
        </div>
    );
};

export default Traffic;