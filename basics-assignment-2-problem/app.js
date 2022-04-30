const app = Vue.createApp({
    data(){
        return{
            text:"",
            keyName:"",
        }
    },
    methods:{
        pressAlert(){
            alert("你抽到五星了");
        },
        changeText(event){
           this.text= event.target.value
        },
        keydownEffect(){
            this.keyName=this.text
        }
    }
})
app.mount("#assignment")