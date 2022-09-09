import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/authContext"

const PrivateRoutes = () => {

    const { currentUser } = useAuth()

    return (
        currentUser ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes