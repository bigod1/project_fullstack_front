import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login"
import { Register } from "../pages/register"
import { Dashboard } from "../pages/dashboard"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { ProfileEdit } from "../pages/profile-edit"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile-edit" element={<ProfileEdit />} />
            </Route>
        </Routes>
    )
}