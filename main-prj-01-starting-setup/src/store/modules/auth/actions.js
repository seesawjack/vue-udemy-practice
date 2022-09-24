export default {
    async login(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDR5jae5927AxL92A7Z0jewL4CQWlgtfz8',{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        })
        const responseData = await response.json();
        if(!response.ok){
            const error =new Error(responseData.message || '認證失敗...');
            throw error
        }
        console.log(responseData)

        context.commit('setUser',{
            token:responseData.idToken,
            userId:responseData.localId,
            tokenExpiration:responseData.expiresIn
        })
    },
    async signup(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDR5jae5927AxL92A7Z0jewL4CQWlgtfz8',{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        })
        const responseData = await response.json();
        if(!response.ok){
            const error =new Error(responseData.message || '認證失敗...');
            throw error
        }
        console.log(responseData)

        context.commit('setUser',{
            token:responseData.idToken,
            userId:responseData.localId,
            tokenExpiration:responseData.expiresIn
        })
    }
}