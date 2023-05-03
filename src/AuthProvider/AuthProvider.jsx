import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.confg";


 export const AuthContext = createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => { 
    const provider = new GoogleAuthProvider();
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
/*------------------------------------------------------------------------- */
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

/*--------------------------------------------------------------- */
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
        updateUserProfile
    }
/*------------------------------------------------------------------*/
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;