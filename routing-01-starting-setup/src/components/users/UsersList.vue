<template>
<button @click="confirmInput">Confirm</button>
<button @click="saveChanges">Save Change</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return{
      changeSaved:false
    }
  },
  methods:{
    confirmInput(){
      this.$router.push('/teams')
    },
    saveChanges(){
      this.changeSaved = true;
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('UsersList Cmp beforeRouteEnter');
    console.log(to,from);
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log('Userslist cmp beforeRouterLeave')
    console.log(to,from);
    if(this.changeSaved){
      next();
    }else{
      const userWantsLeave =  confirm('您確定要離開頁面嗎?')
      next(userWantsLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>