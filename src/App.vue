<script setup>
import { ref } from "vue";
import data from "@/assets/data.json"; //
import getRandomNumber from "@/composables/useRandom"; // getRandomNumber function is called from useRandom file. This Function generates random number between specific interval
import CountDownComp from "@/components/CountDownComp.vue";
import RacePitchComp from "@/components/RacePitchComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
import ResultTableComp from "@/components/ResultTableComp.vue";
import StartAreaComp from "@/components/StartAreaComp.vue";
import FinishAreaComp from "@/components/FinishAreaComp.vue";
import ResultPopupComp from "@/components/ResultPopupComp.vue";
import HorseComp from "@/components/HorseComp.vue";
const show = ref(false);
const distance = 118;
const interval = ref(); // variable of setInterval Funtion
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
// startRace set an interval in order to increase distance by random and implement race conditions
const startRace = () => {
  interval.value = setInterval(() => {
    // (1057 = (Initial globalScoreValue = 2000) - 8 * (distance = 118) + 1 )
    if (globalScorePool.value < 1057) {
      show.value = true;
      clearInterval(interval.value);
      interval.value = 0;
      console.log("showtrue");
    }
    horses.value.forEach((item, index) => {
      if (item.score < distance) horseDistanceIncreaser(index);
    });
    sortHorses();
  }, 20);
};
// Sorts horses by their score
const sortHorses = () => {
  let horseScoreList = [...horses.value].sort(
    (horse1, horse2) => horse2.score - horse1.score
  );
  liveScore.value = horseScoreList;
  return horseScoreList;
};
// restart funtion restart the game
const restart = () => {
  show.value = false;
  clearInterval(interval.value);
  interval.value = 0;
  horses.value = structuredClone(data);
  liveScore.value = horses.value;
  globalScorePool.value = 2000;

  start();
};
//horseDistanceIncreaser function increases the distance by random
const horseDistanceIncreaser = (index) => {
  horses.value[index].distance += getRandomNumber();
  horses.value[index].score = horses.value[index].distance;
  if (horses.value[index].distance > distance) {
    horses.value[index].score += globalScorePool.value;
    globalScorePool.value -= distance;
    console.log(globalScorePool.value);
    horses.value[index].distance = distance;
  } else {
    horses.value[index].distance += getRandomNumber();
  }
};
</script>

<template>
  <section>
    <!-- Header that shown at the top of screen -->
    <div class="topHeader">
      <div class="header">
        <HorseComp class="header__horseComp" :color="'#3d3d3d'"></HorseComp>
        <h1 class="header__title">HORSE RACING</h1>
        <HorseComp :color="'#3d3d3d'" class="header__horseComp2"></HorseComp>
      </div>
      <div class="header__button">
        <template v-if="globalScorePool > 1065">
          <ButtonComp
            class="primary"
            @start="start"
            :disabled="interval || globalScorePool < 2000"
            title="Start"
          ></ButtonComp>
        </template>
        <template v-else>
          <ButtonComp
            class="secondary"
            @start="restart"
            title="Restart"
          ></ButtonComp>
        </template>
      </div>
    </div>
    <!-- Race pitch whick includes starting area racepitch and finish area -->
    <div class="pitchAndScore">
      <!-- CountDown component runs before start for 3 seconds -->
      <CountDownComp v-if="counter > 0" :counter="counter"> </CountDownComp>
      <section>
        <div class="pitchAndScore_resultTable">
          <!-- ResultTableComp shows result sorted by their score instantly on the left side of screen -->
          <ResultTableComp :liveScore="liveScore"></ResultTableComp>
        </div>
      </section>
      <StartAreaComp :horses="horses"></StartAreaComp>
      <RacePitchComp :horses="horses"></RacePitchComp>
      <FinishAreaComp :horses="horses"></FinishAreaComp>
    </div>
  </section>
  <!-- Shows results on ResultPopupComp -->
  <ResultPopupComp
    @close="close"
    @restart="restart"
    :show="show"
    :liveScore="liveScore"
    :globalScorePool="globalScorePool"
  ></ResultPopupComp>
</template>

<style scoped>
.pitchAndScore {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
}
.pitchAndScore_resultTable {
  padding-right: 30px;
  padding-left: 30px;
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
  padding: 0px;
  margin: 0px;
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
  padding: 10px;
  max-width: 60px;
}
.header__horseComp2 {
  transform: scale(-1, 1);
  padding: 10px;
  max-width: 60px;
}
.header__title {
  font-size: 35px;
  position: relative;
}
.header_button {
  display: flex;
  flex-direction: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.primary {
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.secondary {
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
