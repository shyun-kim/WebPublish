import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}


export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducer: {
        login(state, action) {
            state.isLogin = !state.isLogin;
            const { userId } = action.payLoad;
            const loginInfo = {"token": "123455dkfdf", "userId": userId };
            localStorage.setItem("loginInfo", loginInfo)
        },
        logout(state, action) {

        }
    },
    
})


export const { login, loout } 
    = authSlice.actions   //API 함수 또는 컴포넌트에서 dispatch(액션함수)

export default authSlice.reducer  //store  import