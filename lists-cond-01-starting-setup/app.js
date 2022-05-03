const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue:'',
      goals: [] 
    };
  },
  methods:{
    addGoal(event){
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue=''
    },
    removeGoal(idx){
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
