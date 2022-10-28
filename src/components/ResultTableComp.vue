<script setup>
import GoldMedalComp from "@/components/Medals/GoldMedalComp.vue";
import SilverMedalComp from "@/components/Medals/SilverMedalComp.vue";
import BronzeMedalComp from "@/components/Medals/BronzeMedalComp.vue";
const props = defineProps(["liveScore", "globalScorePool"]);
</script>
<template>
  <div class="liveScoreTable">
    <div class="liveScoreTable__header">
      <h1>Live Score</h1>
    </div>

    <table>
      <thead>
        <tr>
          <td>
            <span><b>Order</b></span>
          </td>
          <td>
            <span><b>Horse</b></span>
          </td>
          <td>
            <span><b>Lane</b></span>
          </td>
        </tr>
      </thead>
      <tr v-for="(horse, index) in props.liveScore" :key="index">
        <td>
          <!-- According to index, medal component demonstrate next to index for first three.  -->
          <span>{{ index + 1 }}</span>
          <template v-if="index + 1 === 1 && props.globalScorePool < 1065"
            ><GoldMedalComp class="goldMedal"></GoldMedalComp
          ></template>
          <template v-if="index + 1 === 2 && props.globalScorePool < 1065"
            ><SilverMedalComp class="silverMedal"></SilverMedalComp
          ></template>
          <template v-if="index + 1 === 3 && props.globalScorePool < 1065"
            ><BronzeMedalComp class="bronzeMedal"></BronzeMedalComp
          ></template>
        </td>
        <td>
          <span>{{ horse.name }}</span>
        </td>
        <td>
          <span>#{{ horse.lane }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.bronzeMedal {
  display: inline-flex;
  max-width: 30px;
  max-height: 30px;
  align-self: center;
  vertical-align: middle;
}
.silverMedal {
  display: inline-flex;
  max-width: 30px;
  max-height: 30px;
  align-self: center;
  vertical-align: middle;
}
.goldMedal {
  display: inline-flex;
  max-width: 30px;
  max-height: 30px;
  align-self: center;
  vertical-align: middle;
}
table {
  background-color: rgb(240, 229, 229);
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  border-collapse: collapse;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

table tr {
  border-bottom: 1px solid #dcdde1;
  font-weight: 500;
  text-align: center;
  justify-content: center;
}

table td {
  border-bottom: 1px solid #b4b6bc;
  text-align: center;
  height: 35.2px;
  width: 200px;
}
table th {
  text-align: center;
}
.liveScoreTable__header {
  background-color: rgb(240, 229, 229);
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.liveScoreTable {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
h1 {
  margin: 0;
}
</style>
