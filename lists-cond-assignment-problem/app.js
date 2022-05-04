const app =Vue.createApp({
    data(){
        return{
            goals:[],
            enterInput:'',
            show:true,
        }
    },
    computed:{
        buttonCaption(){
            return this.show?'Hide List':'Show List';
        }
    },
    methods:{
        addInput(){
            this.goals.push(this.enterInput);
            this.enterInput=''
        },
        toggleBtn(){
            this.show=!this.show
        }
    }
}).mount('#assignment')