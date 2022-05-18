<template>
    <form @submit.prevent="submitData">
        <div>
            <input type="text" v-model="enterName" />
        </div>
        <div>
            <input type="text" v-model="enterAge" />
        </div>
        <button>Submit</button>
    </form>
</template>
<script>
export default {
    emits:['add-contact'],
    data(){
        return {
            enterName:'',
            enterAge:''
        }
    },
    methods:{
        submitData(){
            this.$emit(
                'add-contact',
                this.enterName,
                this.enterAge
            )
        }
    }
    
}
</script>