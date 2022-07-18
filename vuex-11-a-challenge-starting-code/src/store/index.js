import { createStore } from 'vuex';

import productModules from './modules/products.js';
import cartModule from './modules/cart.js';
const store = createStore({
    modules:{
        prods:productModules,
        cart:cartModule
    },
    store(){
        return {
            isLoggedIn: false,
        }
    },
    mutations:{
        login(state) {
            state.isLoggedIn = true;
          },
          logout(state) {
            state.isLoggedIn = false;
          },
    },
    actions:{
        login(context){
            context.commit('login');
        },
        logout(context){
            context.commit('logout');
        }
    },
    getters:{
        isAuthenticated(state){
            return state.isLoggedIn;
        }
    }
});

export default store;