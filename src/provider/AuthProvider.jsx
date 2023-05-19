import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    //Email Password Register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserData = (user, name, photo) => {
        setLoading(true);
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }
    //Email Password Signin
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Google signin
    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // Log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // Getting user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
            console.log(loggedUser)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        handleGoogleSignIn,
        updateUserData,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;