<template>
  <the-header title="Remember Me"></the-header>
   <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resource/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue'

export default {
    components:{
        StoredResources,
        TheHeader
    },
    data(){
       return{
           storedResources:[
               {
                   id:'official-guide',
                   title:'Official Guide',
                   description:'The official Vue.js documentation.',
                   link:'https://vuejs.org'
               },
               {
                   id:'google',
                   title:'Goggle',
                   description:'Learn to google...',
                   link:'https://google.org'
               }
           ],
           
       }
   }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}   
</style>