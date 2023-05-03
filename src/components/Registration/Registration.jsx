import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Registration = () => {
    const{user, createUser} = useContext(AuthContext);
    console.log(user, createUser);

    const handleRegister = event =>{
        event.preventDefault();
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
            form.reset();
        })
        .catch(err =>{
          console.log(err.message)
        })
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
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3  input-field" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                 <input type="submit" value="Submit" />
            </Form>
     </div>
     </section>
    );
};

export default Registration;