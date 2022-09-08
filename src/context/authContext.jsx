import { useContext, useState } from "react"
import { createContext } from "react"
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

const AuthContextProvider = ({ children }) => {

    // const [user, setUser] = useState(null)
    const [registerError, setRegisterError] = useState("")

    //=== Create user with email and password ===//

    const signUp = async (email, password, name, lastname) => {
        await createUserWithEmailAndPassword(auth, email, password, name, lastname)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/email-already-exists') setRegisterError('El correo ya existe')
                if (errorCode === 'auth/invalid-email') setRegisterError('El correo no es valido')
                if (errorCode === 'auth/invalid-password') setRegisterError('La contraseña no es valida')
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const signIn = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                console.log(errorMessage)
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
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    return (
        <authContext.Provider value={{
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