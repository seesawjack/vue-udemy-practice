const app =Vue.createApp({
    data(){
        return{
            onclick:false,
            input1:'',
            input2:'',
            // answer
            inputClass:'',
            isVisible:true,
            inputBackgroundColor:'' 
        }
    },
    methods:{
        onClick(){
            this.onclick =!this.onclick
        },
        userInput1(event){
            this.input1=event.target.value
        },
        userInput2(event){
            this.input2=event.target.value
        },
        // answer
        toggleVisible(){
            return this.isVisible = !this.isVisible
        }
    },
    computed:{
        display(){
            return this.onclick?'hidden':'visible'
        },
        inputDisplay1(){
            return this.input1.length>0
        },
        inputDisplay2(){
            return this.input2.length>0
        },
        // answer
        paragraphClasses(){
            return{
                user1:this.inputClass ==="user1",
                user2:this.inputClass ==="user2",
                visible:this.isVisible,
                hidden:!this.isVisible
            }
        }
    },
    watch:{

    }
}).mount("#assignment")