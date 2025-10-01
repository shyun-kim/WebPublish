import { login, logout } from '../../feature/auth/authSlice.js'
import { validateFormCheck } from '../../utils/validate.js'

export const getLogin = () => async (dispatch) => {

    if(validateFormCheck(param)) {
        if("test" === formData.id && "1234" === formData.pwd) {
            //로그인 성공
            dispatch(login());
        } else {
            alert("로그인에 실패, 확인 후 다시 진행해 주세요");
            idRef.current.focus();
        }
    }
}

export const getLogout = () => async (dispatch) => {
    dispatch(logout());
}

