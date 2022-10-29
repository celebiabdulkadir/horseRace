<script setup>
import HorseComp from "@/components/HorseComp.vue";
import CountdownComp from "@/components/CountdownComp.vue";
const props = defineProps([
  "horses",
  "counter",
  "globalScorePool",
  "scoreLimit",
]);
</script>
<template>
  <div class="pitch-area">
    <div class="countdown">
      <CountdownComp v-if="props.counter > 0"></CountdownComp>
    </div>
    <ul>
      <h1 class="starting-gate-title">STARTING GATE</h1>
      <li v-for="(horse, index) in props.horses" :key="index">
        <span class="lane-number">{{ index + 1 }}</span>
        <span class="horse-name"> #{{ horse.name }} </span>
        <span
          class="horse-icon"
          :style="{
            left: horse.distance > 80 ? 80 + '%' : horse.distance + '%',
          }"
          ><HorseComp :color="horse.color"> </HorseComp>
        </span>
      </li>
      <h1 class="end-gate-title">FINISH LINE</h1>
    </ul>
  </div>
</template>
<style scoped>
ul {
  background-color: rgb(95, 168, 95);
  display: table;
  position: relative;
  list-style: none;
  padding: 0 0px;
  margin: 0px 0px auto 0px;
  width: 920px;
  border-radius: 10px;
}

ul li {
  position: relative;
  border-bottom: 1px dashed #dcdde1;
  text-align: left;
  padding: 10px 5px;
  font-weight: 500;
  height: 35.2px;
}

.horse-icon {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-left: 90px;
  position: absolute;
  top: 6px;
  transition: all 0.3s;
  z-index: 4;
}
.lane-number {
  color: #fefeff;
  font-size: xx-large;
}
.horse-name {
  color: #dcdde1;
  font-size: small;
}

.starting-gate-title {
  position: absolute;
  writing-mode: vertical-rl;
  text-orientation: upright;
  top: 0%;
  padding: 0px;
  height: 450px;
  right: 720px;
  width: 3%;
  margin-top: 0px;
  border-right: 2px solid black;
  border-left: 2px solid black;
  background-color: rgb(203, 72, 36);
  color: #ffffffa3;
  z-index: 1;
}
.end-gate-title {
  position: absolute;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 0px;
  height: 450px;
  right: 77px;
  top: 0%;
  width: 3%;
  margin-top: 0px;
  border-right: 2px solid black;
  border-left: 2px solid black;
  background-color: rgb(28, 99, 9);
  color: #ffffffa3;
  z-index: 2;
}
.countdown {
  position: absolute;
  top: 60%;
  right: 33%;
  z-index: 3;
}
.pitch-area {
  padding-right: 30px;
  display: flex;
}
</style>
