import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, getUserFromLocalStorage, logoutUser } from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = getUserFromLocalStorage();
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const res = await loginUser({ email, password });
        // The API returns a full user object with token, role, etc.
        const { token, role, name, userId } = res;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        localStorage.setItem("userId", userId);
        setUser({ token, role, name, userId });
        navigate("/dashboard/my-profile");
    };

    const register = async (formData) => {
        await registerUser(formData);
        // After signup, we don't log them in automatically. We redirect to login page.
        navigate("/login");
    };

    const logout = () => {
        logoutUser();
        setUser(null);
        navigate("/login");
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);