<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">資料讀取中...請稍候</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">沒有查詢到相關資料，請再重新輸入</p> 
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results:[],
      isLoading:false,
      error:null
    }
  },
  methods:{
    loadExperiences(){
      this.isLoading = true
      fetch('https://vue-http-demo-d30aa-default-rtdb.firebaseio.com/surveys.json')
      .then((response)=>{
        if(response.ok){
          return response.json()
        }
      }).then((data)=>{
        this.isLoading = false;
        this.error = null;
       const results = [];
       for(const id in data){
         results.push({
           id:id,
           name:data[id].name,
           rating:data[id].rating
         })
         this.results = results
       }
      })
      .catch((error)=>{
        console.log(error);
        this.isLoading = false;
        this.error="未抓取到資料，請稍後再嘗試"
      })
    }
  },
  mounted(){
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>