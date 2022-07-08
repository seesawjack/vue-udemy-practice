<template>
    <button @click="inc">Add 3</button>
    <button @click="increase({value:11})">Add 11</button>
    <p>git test</p>
</template>

<script>
import { mapActions } from 'vuex';
export default {
   methods:{
        // addOne(){
        //    this.$store.dispatch('increment');
        // }
        // ...mapActions(['increment','increase'])
        ...mapActions('numbers',{
            inc:'increment',
            increase:'increase'
        })
    }
}
</script>