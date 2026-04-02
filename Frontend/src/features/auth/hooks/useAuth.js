import { useContext, useEffect, useCallback } from "react";
import { AuthContext } from "../context";
import { login, register, logout, getMe } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handleLogin = useCallback(async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            setUser(data.user)
        } catch (err) {
            console.error("Login failed:", err)
        } finally {
            setLoading(false)
        }
    }, [ setUser, setLoading ])

    const handleRegister = useCallback(async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
        } catch (err) {
            console.error("Registration failed:", err)
        } finally {
            setLoading(false)
        }
    }, [ setUser, setLoading ])

    const handleLogout = useCallback(async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        } catch (err) {
            console.error("Logout failed:", err)
        } finally {
            setLoading(false)
        }
    }, [ setUser, setLoading ])

    useEffect(() => {

        const getAndSetUser = async () => {
            try {

                const data = await getMe()
                setUser(data.user)
            } catch (err) {
                console.error("Failed to fetch user:", err)
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [ setUser, setLoading ])

    return { user, loading, handleRegister, handleLogin, handleLogout }
}