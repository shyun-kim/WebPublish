import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext.js';

export function useAuth() {
    const {isLogin, setIsLogin } = useContext(AuthContext);

    /** Login */
    const handleLogin = () => {
        setIsLogin(!isLogin);
    }

    /** Logout */
    const handleLogout = () => {
        setIsLogin(!isLogin);
    }

    return { handleLogin, handleLogout }
}