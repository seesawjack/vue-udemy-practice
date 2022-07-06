<template>
    <button @click="addOne">Add 3</button>
</template>

<script>
export default {
   methods:{
        addOne(){
           this.$store.dispatch('increment');
        }
    }
}
</script>