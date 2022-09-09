import { useContext, useState } from "react"
import { createContext } from "react"
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

const AuthContextProvider = ({ children }) => {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState(null)
    const [pending, setPending] = useState(true)
    const [registerError, setRegisterError] = useState("")

    //=== Create user with email and password ===//

    const signUp = async (email, password, name, lastname) => {
        await createUserWithEmailAndPassword(auth, email, password, name, lastname)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                if (errorCode === "auth/email-already-in-use") setRegisterError("El correo ya esta en uso.")
                if (errorCode === 'auth/email-already-exists') setRegisterError('El correo ya existe.')
                if (errorCode === 'auth/invalid-email') setRegisterError('El correo no es valido.')
                if (errorCode === 'auth/invalid-password') setRegisterError('La contraseña no es valida.')
            });
    }

    const signIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(error.code)
                if (errorCode === 'auth/user-not-found') setRegisterError('El usuario no existe')
                if (errorCode === 'auth/wrong-password') setRegisterError('La contraseña es incorrecta')
            });
    }

    //=== Sign in with google ===//

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email)
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential)
                // ...
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setCurrentUser(null)
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setPending(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <authContext.Provider value={{
            pending,
            currentUser,
            registerError,
            signIn,
            signUp,
            loginWithGoogle,
            logOut
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider