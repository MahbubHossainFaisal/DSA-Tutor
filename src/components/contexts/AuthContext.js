import {
    createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,
    signOut, updateProfile,onAuthStateChanged
} from 'firebase/auth'

import React, { useContext, useState,useEffect } from 'react'
import '../firebase/Firebase'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider ({children}){
    const [loading,setLoading] = useState(true)
    const [currentUser,setCurrentUser] = useState()
    //useEffect for state change of the user
    useEffect(() => {
       const auth = getAuth()
    const unsubscribe =   onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            setLoading(false)
       })

       return unsubscribe
    }, [])
    //signup function
   async function signup (email,password,username) {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth,email,password)

        //profile update of the user
        await updateProfile(auth.currentUser, {
            displayName: username
        })

        const user = auth.currentUser
        setCurrentUser({
            ...user,
        })
    }
    
    //Login function for the user
    function login(email,password){
        const auth = getAuth()
        return signInWithEmailAndPassword(auth,email,password)
    }

    //logout function for the user
    function logout(){
        const auth = getAuth()
        return signOut(auth)
    }

    //values that can be accessed by the consumer
    const value = {
        currentUser,
        signup,
        login,
        logout,
    }
    return(
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}