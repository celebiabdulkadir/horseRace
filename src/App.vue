<script setup>
import { ref } from "vue";
import data from "@/assets/data.json";
import getRandomNumber from "@/composables/useRandom";
import CountDownComp from "@/components/CountDownComp.vue";
import RacePitchComp from "@/components/RacePitchComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
import ResultTableComp from "@/components/ResultTableComp.vue";
import WinnerComp from "@/components/WinnerComp.vue";
import StartAreaComp from "@/components/StartAreaComp.vue";
import FinishAreaComp from "@/components/FinishAreaComp.vue";

const distance = 117;
const scoreboard = ref([]);
const interval = ref();
const counter = ref();
const horses = ref(structuredClone(data));
const liveScore = ref(horses.value);
const globalScorePool = ref(2000);
const open = ref(false);

const start = () => {
  counter.value = 3;
  const interval2 = setInterval(() => {
    counter.value--;
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
  }, 20);
};

const sortHorses = () => {
  let horseScoreList = [...horses.value].sort(
    (horse1, horse2) => horse2.score - horse1.score
  );
  liveScore.value = horseScoreList;
  return horseScoreList;
};
const restart = () => {
  scoreboard.value = [];

  clearInterval(interval.value);
  interval.value = 0;

  horses.value = structuredClone(data);
  liveScore.value = horses.value;
  start();
};
const horseDistanceIncreaser = (index) => {
  horses.value[index].distance += getRandomNumber();
  horses.value[index].score = horses.value[index].distance;
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
    <h1>HORSE RACING</h1>
    <h3>HORSE RACE PITCH</h3>
    <div class="pitch">
      <CountDownComp v-if="counter > 0" :counter="counter"> </CountDownComp>
      <section>
        <div class="resultTableandWinner">
          <div class="resultTable">
            <ResultTableComp :liveScore="liveScore"></ResultTableComp>
          </div>
          <div v-if="scoreboard.length > 7" class="restartScreen">
            <WinnerComp :liveScore="liveScore"> </WinnerComp>
            <!-- <ButtonComp
              class="secondary"
              @start="restart"
              title="restart"
            ></ButtonComp> -->
          </div>
        </div>
      </section>
      <br />
      <StartAreaComp :horses="horses"></StartAreaComp>
      <RacePitchComp :horses="horses"></RacePitchComp>
      <FinishAreaComp :horses="horses"></FinishAreaComp>
    </div>

    <div v-if="scoreboard.length > 7">
      <ButtonComp
        class="secondary"
        @start="restart"
        title="restart"
      ></ButtonComp>
    </div>
    <div v-else>
      <ButtonComp
        class="primary"
        @start="start"
        :disabled="interval || scoreboard.length === horses.length"
        title="start"
      ></ButtonComp>
    </div>
  </section>
</template>
<style>
body,
html {
  height: 100%;
}

body {
  background-color: #f5f6fa;
  font-family: Georgia, "Times New Roman", Times, serif;
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
  padding-right: 50px;
  padding-left: 20px;
}

button {
  outline: none;
  border: 0;
  padding: 10px 15px;
  border-radius: 25px;
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
  position: absolute;

  width: 80px;
  height: 50px;
  font-size: 25px;
  border-radius: 25px;
  right: 500px;
}

button.secondary {
  background-color: #34495e;
  position: absolute;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 25px;
  border-radius: 25px;
  right: 500px;
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
.modal {
  background-color: red;
}
</style>
