<template>
    <li>
        <h2>{{name}} {{isFavorite?'(Favorite)':''}}</h2>
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
        <button @click="$emit('delete',id)">Delete</button>
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
        id:{
            type:String,
            required:true
        },
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
            // type:String,
            type: Boolean,
            required: false,
            default:false,
            // validator: function(value){
            //     return value ==='1'||value ==='0'
            // }
        }
    },
    emits:['toggle-favorite','delete'],
    // emits:{
    //     'toggle-favorite':function(id){
    //         if(id){
    //             return true
    //         }else{
    //             console.warn("ID is missing")
    //             return false
    //         }
    //     }
    // },
    data(){
        return{
            detailAreVisible:false,
            // friend:{
            //         id:'Jack',
            //         name:'Jack Olin',
            //         phone:'0123 456 789',
            //         email:'jack@localhost.com'
            // },
        }
    },
    methods:{
        toggleDetails(){
            this.detailAreVisible = !this.detailAreVisible
        },
        toggleFavorite(){
            // if(this.firendIsFavorite == "1"){
            //     this.firendIsFavorite = "0"
            // }else{
            //     this.firendIsFavorite = "1"
            // }
            // this.firendIsFavorite =!this.firendIsFavorite
            this.$emit('toggle-favorite',this.id)
        }
    }
}
</script>