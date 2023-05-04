
import React from 'react';

const Traffic = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center text-info mb-4 mt-5'>Our Success.....</h1> 
           <div className='d-flex justify-content-center'>
              <button className='bg-info px-3 py-2 fs-5 text-light border-0 me-4 rounded'>Subscribe</button>
              <input className='py-2 px-5 rounded' type="email" name="email" id="email" placeholder='enter your email' required />
           </div>
            <div className='d-flex justify-content-center mt-4'>
                <h1 className='me-5 ms-2'>Total Users: 20000+</h1>
                <h1 className='me-5 '>Total Subscriber: 1000+</h1>
                <h1>Total Visitors: 200000+</h1>
            </div>
        </div>
    );
};

export default Traffic;