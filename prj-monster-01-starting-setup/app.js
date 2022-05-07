function getRandomValue(max,min){
  return  Math.floor(Math.random() * (max-min) + min)
}


const app = Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner:null,
            logMessages:[]
        }
    },
    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth <=0){
                // a draw
                this.winner ="draw" 
            }else if(value<=0){
                // player lost
                this.winner ="monster"
            }
        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth <= 0){
                // a draw
                this.winner ="draw" 
            }else if(value<=0){
                // monster lost
                this.winner ="player"
            }
        },
        currentRound(value){
            if(value>=15){
                this.winner="timeout"
            }
        }
    },
    computed:{
        monsterBarStyle(){
            if(this.monsterHealth<0){
                return {width:'0%'}
            }
            return {width: this.monsterHealth + '%' };
        },
        playerBarStyle(){
            if(this.playerHealth<0){
                return {width:'0%'}
            }
            return {width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
     },
    methods:{
        startNewGame(){
            this.playerHealth = 100;
            this.monsterHealth =100;
            this.winner =null;
            this.currentRound =0;
            this.logMessages=[]
        },
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(12,5);
            this.monsterHealth -=attackValue;
            this.addLoadMessage('player','attack',attackValue)
            this.attackPlayer();       
        },
        attackPlayer(){
            const attackValue = getRandomValue(15,8);
            this.addLoadMessage('monster','attack',attackValue)
            this.playerHealth -=attackValue
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(25,10);
            this.monsterHealth -=attackValue;
            this.addLoadMessage('player','specialAttack',attackValue)
            this.attackPlayer();  
        },
        healHealth(){
            this.currentRound++;
            const healthValue = getRandomValue(20,8)          
            if(this.playerHealth + healthValue >=100){
                this.playerHealth = 100
            }else{
                this.playerHealth+=healthValue;
            }
            this.addLoadMessage('player','heal',healthValue)
            this.attackPlayer(); 
        },
        surrender(){
            this.winner="monster"
        },
        addLoadMessage(who,what,value){
            this.logMessages.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            })
        }
    }
}).mount('#game')