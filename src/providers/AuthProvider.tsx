import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    loading: boolean
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("@kenzie-login:token")

        if(!token){
            setLoading(false)
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)
    }, [])

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post("/login", data)

            const { token, clientId } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("@kenzie-login:token", token)
            localStorage.setItem("@kenzie-login:clientId", clientId)

            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, loading }}>
            {children}
        </AuthContext.Provider>
    )
}