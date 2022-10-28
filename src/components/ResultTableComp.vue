<script setup>
import GoldMedalComp from "@/components/Medals/GoldMedalComp.vue";
import SilverMedalComp from "@/components/Medals/SilverMedalComp.vue";
import BronzeMedalComp from "@/components/Medals/BronzeMedalComp.vue";
const props = defineProps(["liveScore", "globalScorePool"]);
</script>
<template>
  <!-- <td v-for="(horse,index) in props.liveScore " :key="index"> {{index +1}}. {{horse.name}}</td> -->
  <div style="overflow-x: auto">
    <div class="header">
      <!-- <h1  > 7">Result Score</h1> -->
      <h1>Live Score</h1>
    </div>

    <table class="table">
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
  display: table;
  padding: 0 25px;
  margin: 0 auto 20px auto;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-radius: 10px;
}

table tr {
  border-bottom: 1px solid #dcdde1;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  opacity: 0.6;
  border-radius: 10px;
}

table td {
  border-bottom: 1px solid #b4b6bc;
  margin-left: 0px;
  text-align: center;
  height: 40px;
  width: 250px;
  border-radius: 10px;
}
table th {
  text-align: center;
}
.header {
  background-color: rgb(240, 229, 229);
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
}
h1 {
  margin: 0;
}
</style>
