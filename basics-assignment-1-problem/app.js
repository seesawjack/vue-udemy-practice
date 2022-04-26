const app = Vue.createApp({
    data(){
        return{
            name:"Jack",
            age:25, 
            imgLink:"https://imgur.dcard.tw/Ll6ySj1h.jpg"
        }
    },
    methods:{
        randerNumber(){
            return Math.random()
        }
    }
})
app.mount("#assignment")