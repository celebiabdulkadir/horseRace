<script setup>
import HorseComp from "@/components/HorseComp.vue";
const props = defineProps(["horses"]);
</script>
<template>
  <div>
    <ul>
      <li
        v-for="(horse, index) in props.horses"
        :key="index"
        :style="{ color: horse.color }"
      >
        <!-- <span  > 
                
                 Lane -{{index + 1 }} #{{ horse.name }}  </span> -->
        <span
          class="horse"
          :style="{
            left: horse.distance > 110 ? 110 + '%' : horse.distance + '%',
          }"
          ><HorseComp :color="horse.color"> </HorseComp
        ></span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.line {
  width: 10px;
}
.table {
  margin-right: 60px;
}

table td {
  position: relative;
  border-bottom: 1px dashed black;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  height: 65px;
}

ul {
  background-color: rgb(95, 168, 95);
  display: table;
  list-style: none;
  border-right: 10px solid black;
  border-left: 10px solid black;
  padding: 0 0px;
  margin: 66px 50px auto 0px;
  width: 750px;
  /* opacity: 0.8; */
  box-shadow: rgb(108 105 108 / 20%) 0 2px 2px, rgb(108 105 108 / 20%) 0 4px 4px,
    rgb(108 105 108 / 20%) 0 8px 8px, rgb(108 105 108 / 20%) 0 16px 16px,
    rgb(108 105 108 / 20%) 0 32px 32px, rgb(108 105 108 / 20%) 0 64px 64px;
}

ul li {
  position: relative;
  border-bottom: 1px dashed #dcdde1;
  text-align: left;
  padding: 10px 5px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  height: 50px;
}

ul li span {
  /* opacity: 0.7; */
  margin-left: 0px;
}
.horse {
  width: 50px;
  height: 50px;
  display: inline-table;
  margin-left: -65px;
  position: absolute;
  top: 15px;
  transition: all 0.3s;
}
</style>
