import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Registration = () => {
    const{user, createUser, updateUserProfile} = useContext(AuthContext);
    const[error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value
        console.log(email, name, password, photo)

        // function for firebase yayyayyay.......
        createUser(email, password)
        .then(result =>{
            const logedUser = result.user;
            console.log(logedUser)
            updateUserProfile({displayName:name, photoURL:photo})
            form.reset();
        })
        .catch(err =>{
          console.log(err.message)
        })
          if(email.length == 0){
            setError('Give your email please!!');
            return;
           }
           else if(password.length == 0){
            setError('Write your password please!');
            return;
           }
           else if(password.length < 6){
            setError('Give at least 6 or more characters word')
            return;
           }
    }
    return (
     <section>
         <div className="auth-form">
           <Form onSubmit={handleRegister} className="form">
                <h1 className="text-primary mb-4">Registration here!!</h1>
                <Form.Group className="mb-3 input-field" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3 input-field" controlId="formGroupUrl">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" placeholder="Enter your photo url" name="photo" />
                </Form.Group>
                <Form.Group className="mb-3 input-field" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"  required/>
                </Form.Group>
                <Form.Group className="mb-3  input-field" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                 <p className='text-danger'>{error}</p>
                 <input  className='bg-info text-light px-2 py-1 fs-5 rounded border-0 mt-3'  type="submit" value="Submit" />
            </Form>
     </div>
     </section>
    );
};

export default Registration;