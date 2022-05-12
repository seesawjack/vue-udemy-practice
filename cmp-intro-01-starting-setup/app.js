const app = Vue.createApp({
    data(){
        return{
            // detailAreVisible:false,
            friends:[
                {id:'manuel',
                name:'Manuel Lorena',
                phone:'0123 456 789',
                email:'manuel@gmail.com'
                },
                {id:'juile',
                name:'Juile Borsa',
                phone:'0453 786 29',
                email:'juile@gmail.com'
                },
            ]
        }
    },
    methods:{
        toggleChange(){
            this.detailAreVisible = !this.detailAreVisible
        }
    }
})

app.component('friend-contact',{
    template:`
    <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleChange()">{{detailAreVisible?'Hide':'Show'}} Details</button>
          <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
    </li>
    `,
    data(){
        return{
            detailAreVisible:false,
            friend:{
                id:'manuel',
                name:'Manuel Lorena',
                phone:'0123 456 789',
                email:'manuel@gmail.com'
            }
        }
    },
    methods:{
        toggleChange(){
            this.detailAreVisible = !this.detailAreVisible
        }
    }
})

app.mount('#app')