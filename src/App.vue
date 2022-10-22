<template>
<div v-if="counter > 0"> {{counter}}</div>

<div v-for="(horse,index) in liveScore " :key="index"> #{{index + 1}} {{horse.name}} </div>

<hr>

  
  <div v-for="(horse,index) in scoreboard" :key="index"  > <span>{{ horse.name }} #{{ index + 1 }} </span></div>
  <hr>
  <!-- <div v-for="(horse, index) in horses" :key="index">{{horse.name}}---#{{index + 1}}</div> -->
  <section>
    <ul >
      <li v-for="(horse, index) in horses" :key="index" :style="{ 'color': horse.color }">
        <span>{{ horse.name }}  </span>
        <i :style="{ 'background-color': horse.color, 'left': horse.distance > 100 ? 100 + '%' : horse.distance + '%' }"  >  </i>
      </li>
    </ul>
    <button class="primary" @click="start" :disabled="interval || scoreboard.length === horses.length">Start</button>
    <button class="secondary" @click="restart">Restart</button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import data from "@/assets/data.json"
import getRandomNumber from "@/composables/useRandom"
import Horse from "@/components/Horse.vue"
const distance = 100;
let scoreboard = ref([]);
let interval = ref();
const counter = ref()
const horses = ref(structuredClone(data));
const liveScoreTable = ref([])

const startCountdown = (seconds) => {
  counter.value = seconds; 
  const interval2 = setInterval(() => {
    console.log(counter.value);
    counter.value--;
      
    if (counter.value < 1 ) {
      console.log("Start!!!");
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

  }, 2000),3000)
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

<style>
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

ul{
  background-color:white;
  display:table;
  list-style:none;
  padding:0 15px;
  margin: 0 auto 20px auto;
  width:500px;
  box-shadow: rgb(108 105 108 / 20%) 0 2px 2px, rgb(108 105 108 / 20%) 0 4px 4px, rgb(108 105 108 / 20%) 0 8px 8px, rgb(108 105 108 / 20%) 0 16px 16px, rgb(108 105 108 / 20%) 0 32px 32px, rgb(108 105 108 / 20%) 0 64px 64px;
}

ul li{
  position: relative;
  border-bottom:1px dashed #dcdde1;
  text-align: left;
  padding: 10px 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
}

ul li span{
  opacity: 0.3;
  margin-left: 10px;
}

ul li i{
  width: 10px;
  height: 10px;
  display:inline-table;
  border-radius: 100%;
  position:absolute;
  top: 15px;
  transition: all 0.3s;
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
