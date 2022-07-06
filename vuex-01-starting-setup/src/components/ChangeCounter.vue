<template>
    <button @click="addOne">Add 3</button>
    <p>git test</p>
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