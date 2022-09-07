import { useContext } from "react"
import { createContext } from "react"

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

const AuthContextProvider = ({ children }) => {

    // const [user, setUser] = useState(null)

    return (
        <authContext.Provider value={{
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider