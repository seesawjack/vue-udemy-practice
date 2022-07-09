export default {
    login(context){
        context.commit('isAuth',{ isAuth : true})
    },
    logout(context){
        context.commit('isAuth',{ isAuth : false})
    } 
  }