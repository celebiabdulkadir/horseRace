<script setup>
import HorseComp from "@/components/Horse.vue"
const props = defineProps(['horses'])
</script>

<template>
     <!-- <i :style="{ 'background-color': horse.color, 'left': horse.distance > 100 ? 100 + '%' : horse.distance + '%' }" />  -->
        <ul >
            <li v-for="(horse, index) in props.horses" :key="index" :style="{ 'color': horse.color }">
                <span  >{{ horse.name }}  </span>
                <span class="horse" :style="{ 'left': horse.distance > 100 ? 100 + '%' : horse.distance + '%' }"><HorseComp :color="horse.color" > </HorseComp></span>
            </li>
        </ul>

</template>
<style scoped>

ul{
  background-color:white;
  display:table;
  list-style:none;
  padding:0 15px;
  margin: 0 auto 20px auto;
  width:500px;
  box-shadow: rgb(108 105 108 / 20%) 0 2px 2px, rgb(108 105 108 / 20%) 0 4px 4px, rgb(108 105 108 / 20%) 0 8px 8px, rgb(108 105 108 / 20%) 0 16px 16px, rgb(108 105 108 / 20%) 0 32px 32px, rgb(108 105 108 / 20%) 0 64px 64px;
}

ul li{
  position: relative;
  border-bottom:1px dashed #dcdde1;
  text-align: left;
  padding: 10px 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
}

ul li span{
  opacity: 0.3;
  margin-left: -15px;
}

ul li i{
  width: 10px;
  height: 10px;
  display:inline-table;
  border-radius: 100%;
  position:absolute;
  top: 15px;
  transition: all 0.3s;
}
.horse{
  width: 40px;
  height: 40px;
  display:inline-table;
  position:absolute;
  top: 5px;
  transition: all 0.3s;
}
</style>