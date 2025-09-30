
/**
 * AuthContext에 저장된 데이터를 제어하는 커스텀 훅 함수
 */


import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext.js';

export function useAuth() {
    const {isLogin, setIsLogin } = useContext(AuthContext);

    /** Login */
    const handleLogin = () => {
        setIsLogin(!isLogin);
        const loginInfo = {
            "userId": FormData.id,
            "token": "dk1234"
        }
        // 로그인 정보를 브라우저 > Application Tab > Local Storage에 객체를 문자열로 저장
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    }

    const handleLogout = () => {
        setIsLogin(!isLogin);
        localStorage.removeItem("loginInfo");
    }

    return { handleLogin, handleLogout}
}
//     /** Logout */
//     const handleLogout = () => {
//         setIsLogin(!isLogin);
//     }

//     return { handleLogin, handleLogout }
// }




