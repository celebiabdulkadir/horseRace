<script setup>
import { ref, computed } from "vue"
import data from "@/assets/data.json"
import getRandomNumber from "@/composables/useRandom"
import CountDownComp from "@/components/CountDownComp.vue"
import RacePitchComp from "@/components/RacePitchComp.vue"
import ButtonComp from "@/components/ButtonComp.vue"
import ResultTableComp from "@/components/ResultTableComp.vue"
import WinnerComp from "@/components/WinnerComp.vue"
import ResultScoreBoardComp from "./components/ResultScoreBoardComp.vue"
const distance = 93;
const scoreboard = ref([]);
const interval = ref();
const counter = ref()
const horses = ref(structuredClone(data));
const liveScoreTable = ref([])

const startCountdown = (seconds) => {
  counter.value = seconds; 
  const interval2 = setInterval(() => {
    counter.value--;
      
    if (counter.value < 1 ) {
      clearInterval(interval2);
    }
  }, 1000);
}

const start =  () => {
  startCountdown(3)
  setTimeout(()=>
  interval.value = setInterval(()=> {
    if (scoreboard.value.length === horses.value.length){
      clearInterval(interval.value);
      interval.value = 0;
    } 
    horses.value.forEach((value, index) => {

      if (!value.hasOwnProperty('finished_at')) horseDistanceIncreaser(index);
    });
  }, 800),3000)
}
const liveScore = computed( () => {
    let n = horses.value.filter(c => !c.hasOwnProperty("score")).sort((a, b) => b.distance-a.distance)
    for (let i = 0, c=0; i < horses.value.length; i++){
        if (!horses.value[i].hasOwnProperty("score") && scoreboard.value.length < 1  ){
           liveScoreTable.value[i] = n[c++];
        } 
    if(scoreboard.value.length > 0){
        for(let j = 0; j < scoreboard.value.length; j ++){
            liveScoreTable.value[j] = scoreboard.value[j]
          }
        }
        } 
    
    return liveScoreTable.value
})

const restart = () => {
  scoreboard.value = [];
  
  clearInterval(interval.value);
  interval.value = 0;

  horses.value = structuredClone(data);
  
  start();
}
const horseDistanceIncreaser = (index) => {
  horses.value[index].distance += getRandomNumber();
  if (horses.value[index].distance > distance) {
    horses.value[index].distance = distance;
    horses.value[index].finished_at = new Date().toGMTString();
    horses.value[index].score = scoreboard.value.length + 1;
    scoreboard.value.push(horses.value[index]);
    
    
  } else {
    horses.value[index].distance += getRandomNumber();
  }
  
}
</script>

<template>

<CountDownComp v-if="counter > 0" :counter="counter"> </CountDownComp>
  <section>

  <div>
    <ResultTableComp  :liveScore="liveScore" :scoreboard="scoreboard" ></ResultTableComp>
</div>
  <div v-if="scoreboard.length > 7">
    <WinnerComp  :liveScore="liveScore"> </WinnerComp>
    <ButtonComp class="secondary" @start="restart" title="restart"></ButtonComp >
  </div>


</section>
  <br>

  <section>
    <RacePitchComp :horses ="horses"></RacePitchComp>
    <ButtonComp class="primary" @start="start" :disabled="interval || scoreboard.length === horses.length" title="start"></ButtonComp>
  </section>
</template>
<style >
body,html {
  height: 100%;
}

body{
  background-color:#f5f6fa;
}

body > div {
  width: 100%;
  height: 100%;
  display: table;
}

body > div section {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}



button{
  font-family: Georgia, 'Times New Roman', Times, serif;
  outline:none;
  border:0;
  padding: 10px 15px;
  border-radius: 2px;
  font-size: 15px;
  margin: 5px;
  cursor: pointer;
}

button:hover{
  opacity: 0.7;
}

button.primary{
  background-color: #3498db;
  color: white;
}

button.secondary{
  background-color: #34495e;
  color: white;
}
</style>
