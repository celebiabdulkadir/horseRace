<script setup>
import { ref } from "vue";
import data from "@/assets/data.json";
import getRandomNumber from "@/composables/useRandom";
import CountDownComp from "@/components/CountDownComp.vue";
import RacePitchComp from "@/components/RacePitchComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
import ResultTableComp from "@/components/ResultTableComp.vue";
import StartAreaComp from "@/components/StartAreaComp.vue";
import FinishAreaComp from "@/components/FinishAreaComp.vue";
import ResultPopupComp from "@/components/ResultPopupComp.vue";
import HorseComp from "@/components/HorseComp.vue";
const show = ref(false);
const distance = 117;
const scoreboard = ref([]);
const interval = ref();
const counter = ref();
const horses = ref(structuredClone(data));
const liveScore = ref(horses.value);
const globalScorePool = ref(2000);

const close = () => {
  show.value = false;
};
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
    if (globalScorePool.value < 1065) {
      console.log("showtrue");
      show.value = true;
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
  show.value = false;
  scoreboard.value = [];

  clearInterval(interval.value);
  interval.value = 0;

  horses.value = structuredClone(data);
  liveScore.value = horses.value;
  globalScorePool.value = 2000;

  start();
};
const horseDistanceIncreaser = (index) => {
  horses.value[index].distance += getRandomNumber();
  horses.value[index].score = horses.value[index].distance;
  if (horses.value[index].distance > distance) {
    horses.value[index].score += globalScorePool.value;
    globalScorePool.value -= 117;
    console.log(globalScorePool.value);
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
    <div class="topHeader">
      <div class="header">
        <HorseComp class="header__horseComp"></HorseComp>

        <h1 class="header__title">HORSE RACING</h1>

        <HorseComp
          transform="scale(-1,1) translate(0,0)"
          class="header__horseComp"
        ></HorseComp>
      </div>
      <div class="header__button">
        <div v-if="globalScorePool > 1065">
          <ButtonComp
            class="primary"
            @start="start"
            :disabled="interval || globalScorePool < 2000"
            title="Start"
          ></ButtonComp>
        </div>
        <div v-else>
          <ButtonComp
            class="secondary"
            @start="restart"
            title="Restart"
          ></ButtonComp>
        </div>
      </div>
    </div>

    <div class="pitch">
      <CountDownComp v-if="counter > 0" :counter="counter"> </CountDownComp>
      <section>
        <div class="resultTableandWinner">
          <div class="resultTable">
            <ResultTableComp :liveScore="liveScore"></ResultTableComp>
          </div>
        </div>
      </section>
      <StartAreaComp :horses="horses"></StartAreaComp>
      <RacePitchComp :horses="horses"></RacePitchComp>
      <FinishAreaComp :horses="horses"></FinishAreaComp>
    </div>
  </section>
  <ResultPopupComp
    @close="close"
    @restart="restart"
    :show="show"
    :liveScore="liveScore"
    :globalScorePool="globalScorePool"
  ></ResultPopupComp>
</template>

<style>
body,
html {
  height: 100%;
}

body {
  background-color: #ffffff;
  font-family: Georgia, "Times New Roman", Times, serif;
  background-image: url("./assets/background.jpeg");
  background-size: auto 820px;
  background-repeat: repeat-x;
  background-position: top center;
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
  padding-right: 30px;
  padding-left: 30px;
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
  position: relative;

  width: 80px;
  height: 50px;
  font-size: 25px;
  border-radius: 15px;
}

button.secondary {
  background-color: #34495e;
  position: relative;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 25px;
  border-radius: 15px;
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
.topHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
}

.header {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
}
.header__horseComp {
  opacity: 0.5;
  padding: 10px;
  max-width: 60px;
}
.header__title {
  font-size: 35px;
  position: relative;
}
.header_button {
  position: relative;
}
</style>
