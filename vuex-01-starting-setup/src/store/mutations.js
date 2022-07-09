export default {
    isAuth(state,payload){
        state.isLoggedIn = payload.isAuth
    }
}