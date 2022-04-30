const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name:"",
      confirmName:""
    };
  },
  methods:{
    confirmNameInput(){
      this.confirmName = this.name
    },
    add(num){
      this.counter= this.counter+num
    },
    menus(num){
      this.counter = this.counter-num
    },
    addName(event,lastName){
    this.name = event.target.value
    },
    send(){
      alert("you send")
    },
    resetInput(){
      this.name= ""
    }
  }
});

app.mount('#events');
