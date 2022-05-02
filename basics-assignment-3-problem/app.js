const app = Vue.createApp({
    data(){
        return{
            counter:0,
        }
    },
    methods:{
        addNumber(num){
            this.counter = this.counter + num
        }
    },
    computed:{
        result(){
            if(this.counter<37){
                return "Not there yet"
            }else if(this.counter ===37){
                return this.counter
            }else{
                return "Too much!"
            }
        }
    },
    watch:{
        // counter(value){
        //     if(value>37){
        //         const that = this
        //         setTimeout(function(){
        //             that.counter =0
        //         },500)
        //     }
        // }
        result(){
            console.log("watching")
            const that = this
            setTimeout(function(){
                that.counter =0;
            },500)
        }
    }
}).mount("#assignment")