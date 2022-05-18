<template>
    <div class="box">
        <strong>My name is:{{name}}</strong>
        <br>
        <strong>{{age}} Years</strong>
    </div>
</template>

<script>
export default {
   props:{
       name:{
           type:String,
           required:true
       },
       age:{
           type:Number,
            required:true
       }
   }
}
</script>