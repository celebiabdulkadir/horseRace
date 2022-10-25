<script setup>
import { ref, computed } from "vue";
import data from "@/assets/data.json";
import getRandomNumber from "@/composables/useRandom";
import CountDownComp from "@/components/CountDownComp.vue";
import RacePitchComp from "@/components/RacePitchComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
import ResultTableComp from "@/components/ResultTableComp.vue";
import WinnerComp from "@/components/WinnerComp.vue";
import ResultScoreBoardComp from "./components/ResultScoreBoardComp.vue";
import RaceCompetitorComp from "./components/RaceCompetitorComp.vue";
const distance = 110;
const scoreboard = ref([]);
const interval = ref();
const counter = ref();
const horses = ref(structuredClone(data));
const liveScoreTable = ref([]);
const globalScorePool = ref(2000);

const start = () => {
  counter.value = 3;
  const interval2 = setInterval(() => {
    counter.value--;
    console.log(counter.value);
    if (counter.value < 1) {
      clearInterval(interval2);
      startRace();
    }
  }, 1000);
};

const startRace = () => {
  interval.value = setInterval(() => {
    if (scoreboard.value.length === horses.value.length) {
      clearInterval(interval.value);
      interval.value = 0;
    }
    horses.value.forEach((value, index) => {
      if (!value.hasOwnProperty("finished_at")) horseDistanceIncreaser(index);
    });
    sortHorses();
  }, 10);
};

const sortHorses = () => {
  let horseScoreList = [...horses.value].sort(
    (horse1, horse2) => horse2.score - horse1.score
  );
  // for (let i = 0; i < horses.value.length; i++){
  //     if (!horses.value[i].hasOwnProperty("score") && scoreboard.value.length < 1  ){
  //        liveScoreTable.value[i] = n[i];
  //     }
  // // if(scoreboard.value.length > 0){
  // //     for(let j = 0; j < scoreboard.value.length; j ++){
  // //         liveScoreTable.value[j] = scoreboard.value[j]
  // //       }
  // //     }
  //     }
  console.log(horses.value);
  liveScore.value = horseScoreList;
};
const liveScore = computed(() => {
  let horseScoreList = [...horses.value].sort(
    (horse1, horse2) => horse2.score - horse1.score
  );
  // for (let i = 0; i < horses.value.length; i++){
  //     if (!horses.value[i].hasOwnProperty("score") && scoreboard.value.length < 1  ){
  //        liveScoreTable.value[i] = n[i];
  //     }
  // // if(scoreboard.value.length > 0){
  // //     for(let j = 0; j < scoreboard.value.length; j ++){
  // //         liveScoreTable.value[j] = scoreboard.value[j]
  // //       }
  // //     }
  //     }
  console.log(horseScoreList);
  return horseScoreList;
});

const restart = () => {
  scoreboard.value = [];

  clearInterval(interval.value);
  interval.value = 0;

  horses.value = structuredClone(data);

  start();
};
const horseDistanceIncreaser = (index) => {
  horses.value[index].distance += getRandomNumber();
  horses.value[index].score = horses.value[index].distance; // scoreboard.value.length + 1;
  if (horses.value[index].distance > distance) {
    horses.value[index].score += globalScorePool.value;
    globalScorePool.value -= 110;
    horses.value[index].distance = distance;
    horses.value[index].finished_at = new Date().toGMTString();

    scoreboard.value.push(horses.value[index]);
  } else {
    horses.value[index].distance += getRandomNumber();
  }
};
</script>

<template>
  <section>
    <div class="pitch">
      <CountDownComp v-if="counter > 0" :counter="counter"> </CountDownComp>
      <section>
        <div class="resultTableandWinner">
          <div class="resultTable">
            <ResultTableComp
              :liveScore="liveScore"
              :scoreboard="scoreboard"
            ></ResultTableComp>
          </div>
          <div v-if="scoreboard.length > 7" class="restartScreen">
            <WinnerComp :liveScore="liveScore"> </WinnerComp>
            <ButtonComp
              class="secondary"
              @start="restart"
              title="restart"
            ></ButtonComp>
          </div>
        </div>
      </section>
      <br />
      <RaceCompetitorComp :horses="horses"></RaceCompetitorComp>
      <RacePitchComp :horses="horses"></RacePitchComp>
    </div>
    <ButtonComp
      class="primary"
      @start="start"
      :disabled="interval || scoreboard.length === horses.length"
      title="start"
    ></ButtonComp>
  </section>
</template>
<style>
body,
html {
  height: 100%;
}

body {
  background-color: #f5f6fa;
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
.pitch {
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
}
.resultTable {
  padding-right: 100px;
  padding-left: 20px;
}

button {
  font-family: Georgia, "Times New Roman", Times, serif;
  outline: none;
  border: 0;
  padding: 10px 15px;
  border-radius: 2px;
  font-size: 15px;
  margin: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

button.primary {
  background-color: #3498db;
  color: white;
  margin-left: 500px;
}

button.secondary {
  background-color: #34495e;
  color: white;
}
.restartScreen {
  display: flex;
  align-items: column;
  justify-content: center;
}
.resultTableandWinner {
  display: table;
  align-items: column;
  justify-content: center;
}
</style>
