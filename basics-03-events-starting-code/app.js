const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: '',
      // fullName:"",
      lastName:''
    };
  },
  watch:{
    // name(value){
    //   if(value===''){
    //      this.confirmName ='';
    //   }else{
    //     this.confirmName = value +' '+this.lastName
    //   } 
    // },
    // lastName(value){
    //   if(value===''){
    //     this.confirmName ='';
    //  }else{
    //    this.confirmName = this.name +' '+ value
    //  } 
    // }
    counter(value){
      if(value>50){
        const that =this;
        setTimeout(function(){

          that.counter=0;
        },2000)
        // this.counter = 0;
      }
    }
  },
  computed:{
    fullname(){
      if(this.name === " " || this.lastName===" "){
        return " "
      }
      return this.name+" "+this.lastName
    }
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
      this.name= " "
    }
  }
});

app.mount('#events');
