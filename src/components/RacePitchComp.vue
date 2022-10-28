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
        <!-- <span> Lane -{{ index + 1 }} #{{ horse.name }} </span> -->
        <span
          class="horse"
          :style="{
            left: horse.distance > 117 ? 117 + '%' : horse.distance + '%',
          }"
          ><HorseComp :color="horse.color"> </HorseComp>
        </span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  background-color: rgb(95, 168, 95);
  display: table;
  list-style: none;

  padding: 0 0px;
  margin: 0px 0px auto 0px;
  width: 750px;
}

ul li {
  position: relative;
  border-bottom: 1px dashed #dcdde1;
  text-align: left;
  padding: 10px 5px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  height: 35.2px;
}

ul li span {
  /* opacity: 0.7; */
  margin-left: 0px;
}
.horse {
  width: 50px;
  height: 50px;
  display: inline-table;
  margin-left: -90px;
  position: absolute;
  top: 10px;
  transition: all 0.3s;
}
</style>
