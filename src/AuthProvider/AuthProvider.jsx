import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confg";


 export const AuthContext = createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => { 
    
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const partho = 'kamo jay beta';
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    } ,[user])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        partho
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;