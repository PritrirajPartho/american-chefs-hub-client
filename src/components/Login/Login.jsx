import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import './Login.css';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.confg";

const Login = () => {
    const{ signIn} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(resalt =>{
            const logedUser = resalt.user;
            console.log(logedUser);
            form.reset();
        })
        .catch(err =>{
            console.log(err.message);
        })
    }
    
    // signin with google
    const handleGogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then((result)=>{
           const logedinuser = result.user;
           console.log(logedinuser);
        })
        .catch((error) => {
          console.log(error.message);
        })
     }
 
  return (
   <section>
        <div className="auth-form">
    <Form onSubmit={handleLogin}   className="form">
         <h1 className="text-primary mb-4">Log--in--here!!</h1>
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
         <div className='other-log-in'>
           <button onClick={handleGogleSignIn}>Sign with Google</button>
           <button>Github sign-in</button>
        </div>
   </section>
  );
};

export default Login;
