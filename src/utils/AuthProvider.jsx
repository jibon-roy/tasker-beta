import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/auth";
import useAxiosPublic from "./hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const google = new GoogleAuthProvider();


    const newEmailPasswordUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleUser = () => {
        return signInWithPopup(auth, google)
            .then(result => {
                if (result.user) {
                    const name = result?.user?.displayName;
                    const email = result?.user?.email;
                    const newUser = { name, email }
                    axiosPublic.post('/createUser', newUser)
                    Swal.fire({
                        title: "Welcome",
                        text: "Login successful.",
                        icon: "success"
                    });
                }

            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        title: "Something is wrong",
                        text: "Please try again.",
                        icon: "error"
                    });
                }
            })
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])

    const logOut = () => {
        return signOut(auth)
    }


    const data = { googleUser, newEmailPasswordUser, loginUser, loading, user, logOut }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;