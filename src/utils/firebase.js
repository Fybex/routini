import React from 'react'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
})

export const db = getFirestore()

export const AuthContext = createContext()

export const AuthContextProvider = props => {
    const [user, setUser] = useState(getAuth().currentUser)
    const [error, setError] = useState()

    getAuth().languageCode = 'uk'

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
        return () => unsubscribe()
    }, [])


    // useEffect(() => {
    //     console.log(user)
    // }, [user])
    return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
    const auth = useContext(AuthContext)
    return { ...auth, isAuthenticated: auth.user != null }
}
