import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/teams'},  //當網址輸入'/'時，回重新導向到'/teams'
        // {path:'/teams',component:TeamsList,alias:'/'}, //當在網址輸入'/' 時，網頁不會重新導向到新的網址，反而是替換成TeamsList這個component
        {
            path:'/teams',
            component:TeamsList,
            children:[
                {path:':teamId',component:TeamMembers,props:true},
            ]
        }, //our-domain.com/teams => TeamsList
        {path:'/users',component:UsersList}, //our-domain.com/users => UsersList
        {path:'/:notFound(.*)',component:NotFound} //若使用者在網址列輸入無效的內容，則可以透過'/:名稱自訂(.*)'重定向到指定的component
    ],
    linkActiveClass:'active'
})

const app = createApp(App);
app.use(router)

app.mount('#app');
