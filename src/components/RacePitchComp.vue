<script setup>
import HorseComp from "@/components/HorseComp.vue";
import CountdownComp from "./CountdownComp.vue";
const props = defineProps(["horses", "counter"]);
</script>
<template>
  <div class="pitchArea">
    <div class="countdown">
      <CountdownComp v-if="props.counter > 0"></CountdownComp>
    </div>
    <h1 class="startingGateTitle">STARTING GATE</h1>
    <ul>
      <li v-for="(horse, index) in props.horses" :key="index">
        <span class="horseTitle">{{ index + 1 }} #{{ horse.name }}</span>
        <span
          class="horse"
          :style="{
            left: horse.distance > 80 ? 80 + '%' : horse.distance + '%',
          }"
          ><HorseComp :color="horse.color"> </HorseComp>
        </span>
      </li>
    </ul>
    <h1 class="endGateTitle">FINISH LINE</h1>
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

.horse {
  width: 50px;
  height: 50px;
  display: inline-table;
  margin-left: 90px;
  position: absolute;
  top: 10px;
  transition: all 0.3s;
  z-index: 2;
}

.startingGateTitle {
  position: absolute;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  top: 32%;
  padding: 0px;
  height: 450px;
  right: 760px;
  width: 2%;
  margin-top: 0px;
  border-right: 5px solid black;
  border-left: 5px solid black;
  background-color: rgb(203, 72, 36);
  z-index: 1;
}
.endGateTitle {
  position: absolute;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 0px;
  height: 450px;
  right: 127px;
  top: 32%;
  width: 2%;
  margin-top: 0px;
  border-right: 5px solid black;
  border-left: 5px solid black;
  background-color: rgb(28, 99, 9);
  z-index: 1;
}
.countdown {
  position: absolute;
  top: 60%;
  right: 33%;
  z-index: 3;
}
.pitchArea {
  padding-right: 30px;
}
</style>
