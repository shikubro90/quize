import React, { useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth"

import "../firebase"

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}


const AuthProvider = ({children}) =>{

    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState()
    
    useEffect(()=>{
        const Auth = getAuth();
        const unsubscribe = onAuthStateChanged(Auth, (user)=>{
            setCurrentUser(user);
            setLoading(false)
        }); 
        return unsubscribe
    }, [])


    // signup funciton

    async function signup(email, password, username){
        
        const auth = getAuth()

        await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
            dispalyName : username
        });

        const user = auth.currentUser;

        setCurrentUser({
            ...user
        })
    }

    //signIn function

    function signin(email, password){
        
        const auth = getAuth();
        
        return signInWithEmailAndPassword(auth, email, password);
    }


    //logout function

    function logOut(){
        
        const auth = getAuth()

        return signOut(auth)

    }

    const value ={
        currentUser,
        signup,
        signin,
        logOut
    };

    return(

        <AuthContext.Provider value={value}>
                {!loading && children}
        </AuthContext.Provider>

    )


}

export default AuthProvider


