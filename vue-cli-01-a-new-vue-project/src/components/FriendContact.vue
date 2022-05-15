<template>
    <li>
        <h2>{{name}} {{firendIsFavorite ==="1" ?'(Favorite)':''}}</h2>
        <button @click="toggleDetails">{{detailAreVisible?'Hide':'Show'}} detail</button>
        <br>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailAreVisible">
            <li>
                <strong>Phone:</strong>
                {{phoneNumber}}
            </li>
            <li>
                <strong>Email:</strong>
                {{emailAddress}}
            </li>
        </ul>
    </li> 
</template>

<script>
export default {
    // props:[
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props:{
        name:{
            type: String,
            required: true,
        },
        phoneNumber:{
            type: String,
            required: true,
        },
        emailAddress:{
            type: String,
            required: true,
        },
        isFavorite:{
            type: String,
            required: false,
            default:'0',
            validator: function(value){
                return value ==='1'||value ==='0'
            }
        }
    },
    data(){
        return{
            detailAreVisible:false,
            friend:{
                    id:'Jack',
                    name:'Jack Olin',
                    phone:'0123 456 789',
                    email:'jack@localhost.com'
            },
            firendIsFavorite:this.isFavorite
        }
    },
    methods:{
        toggleDetails(){
            this.detailAreVisible = !this.detailAreVisible
        },
        toggleFavorite(){
            if(this.firendIsFavorite == "1"){
                this.firendIsFavorite = "0"
            }else{
                this.firendIsFavorite = "1"
            }
        }
    }
}
</script>