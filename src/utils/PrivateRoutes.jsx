import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/authContext"

const PrivateRoutes = () => {

    const { currentUser, isLoading } = useAuth()
    console.log(currentUser)
    return (
        currentUser && !isLoading ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes