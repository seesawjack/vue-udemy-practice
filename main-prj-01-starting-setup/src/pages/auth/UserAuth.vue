<template>
    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="password">
            </div>
            <div class="form-control">
                <label for="password">password</label>
                <input type="password" id="password">
            </div>
            <p v-if="!formIsValid">請輸入有效信箱及密碼(密碼長度至少６個字)</p>
            <base-button>{{ submitButtonCaption }}</base-button>
            <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
        </form>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            formIsValid:true,
            mode:'login'
        }
    },
    computed:{
        submitButtonCaption(){
            if(this.mode === 'login'){
                return 'Login';
            }else{
                return 'Signup'
            }
        },
        switchModeButtonCaption(){
            if(this.mode === 'login'){
                return 'Signup instead';
            }else{
                return 'Login instead'
            }
        }
    },
    methods:{
        submitForm(){
            this.formIsValid = true;
            if(
                this.email === '' ||
                !this.email.includes('@')||
                this.password.length <6
            ){
                this.formIsValid = false;
                return;
            }
        },
        switchAuthMode(){
            if(this.mode === 'login'){
                this.mode = 'signup'
            }else{
                this.mode = 'login'
            }
        }
    }
}
</script>

<style scoped>
form {
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>