<script setup>
import { ref } from "vue";
import data from "@/assets/data.json";
import getRandomNumber from "@/composables/useRandom"; // getRandomNumber function is called from useRandom.js file. This Function generates random number between specific interval
import RacePitchComp from "@/components/RacePitchComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
import ResultTableComp from "@/components/ResultTableComp.vue";
import ResultPopupComp from "@/components/ResultPopupComp.vue";
import HorseComp from "@/components/HorseComp.vue";
const show = ref(false);
const distance = 80;
const interval = ref(); // variable of setInterval Function
const counter = ref();
const horses = ref(structuredClone(data));
const liveScore = ref(horses.value);
const globalScorePool = ref(2000);
const scoreLimit = 1361; // (1361 = (Initial globalScoreValue = 2000) - 8 * (distance = 80) + 1 )
// close function close the ResultPopupComp.
const close = () => {
  show.value = false;
};
const start = () => {
  counter.value = 3; // in order to set 3 seconds.
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
    horses.value.forEach((item, index) => {
      if (item.score < distance) horseDistanceIncreaser(index);
    });
    if (globalScorePool.value < scoreLimit) {
      show.value = true;
      clearInterval(interval.value);
      interval.value = 0;

      console.log("showtrue");
    }

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
// restart function restart the game
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
  horses.value[index].distance += getRandomNumber(); //   distance increases by adding random number
  horses.value[index].score = horses.value[index].distance; // set score to distance

  // Finish conditions.
  if (horses.value[index].distance > distance) {
    // When a horse finishes the race , globalScorePool will be added to its score
    horses.value[index].score += globalScorePool.value;
    // distance will be  substracted form globalScorePool
    globalScorePool.value -= distance;
    // horse's distance is set to distance variable in order not to exceed finish line
    horses.value[index].distance = distance;
  } else {
    // Standard Condition.
    horses.value[index].distance += getRandomNumber();
  }
};
</script>

<template>
  <section>
    <!-- Header that shown at the top of screen and includes buttons and header -->
    <div class="top-header">
      <div class="header">
        <HorseComp class="header__horsecomp" :color="'#3d3d3d'"></HorseComp>
        <h1 class="header__title">HORSE RACING</h1>
        <HorseComp :color="'#3d3d3d'" class="header__horsecomp2"></HorseComp>
      </div>
      <div class="header__button">
        <template v-if="globalScorePool > scoreLimit">
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
    <div class="pitch-and-score">
      <!-- <div class="countdown">
        <CountdownComp v-if="counter > 0"></CountdownComp>
      </div> -->
      <div class="pitch-and-score__score">
        <!-- ResultTableComp shows result sorted by their score instantly on the left side of screen -->
        <ResultTableComp
          :liveScore="liveScore"
          :scoreLimit="scoreLimit"
          :globalScorePool="globalScorePool"
        ></ResultTableComp>
      </div>
      <RacePitchComp :horses="horses" :counter="counter"></RacePitchComp>
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
.pitch-and-score {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-between;
}
.pitch-and-score__score {
  background-color: rgb(255, 255, 255);
  position: relative;

  margin: 30px;
  border-radius: 10px;
}

.top-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 30px;
}

.header {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
}
.header__horsecomp {
  padding: 10px;
  max-width: 60px;
}
.header__horsecomp2 {
  transform: scale(-1, 1);
  padding: 10px;
  max-width: 60px;
}
.header__title {
  font-size: 35px;
  position: relative;
}
.header__button {
  padding-bottom: 30px;
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
