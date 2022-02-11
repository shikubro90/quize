import React, { useContext, useEffect } from "react";
import {getAuth, 
    createUserWithEmailAndPassword,
     updateProfile,
      signInWithEmailAndPassword,
    signOut} from "firebase/auth"


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}


const AuthProvider = ({children}) =>{

    const [loading, setLoading] = useEffect(true)
    const [currentUser, setCurrentUser] = useEffect()
    

    // signup funciton

    async function signup(email, password, userName){
        
        const auth = getAuth()

        await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
            dispalyName : userName
        })

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


