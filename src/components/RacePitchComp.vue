<script setup>
import HorseComp from "@/components/HorseComp.vue"
const props = defineProps(['horses'])
</script>
<template>
  <h1>Horse Race Pitch</h1>
  <div class="pitch">
  <table>
  <thead>
        <tr>

                <td> <b>Horse</b> </td>
                <td> <b>Lane</b></td>


        </tr>
    </thead>
        <tr v-for="(horse,index) in props.horses " :key="index"  >
            <td>{{horse.name}}</td>
            <td>#{{horse.lane}}</td>
        </tr>

</table>

        <ul >
            <li v-for="(horse, index) in props.horses" :key="index" :style="{ 'color': horse.color }">
                <!-- <span  > 
                
                 Lane -{{index + 1 }} #{{ horse.name }}  </span> -->
                <span class="horse" :style="{ 'left': horse.distance > 93 ? 93 +  '%'  : horse.distance + '%' }"><HorseComp :color="horse.color" > </HorseComp></span>
            </li>
        </ul>
      </div>
</template>
<style scoped>
table {
  

}

table tr {
  position: relative;
  border-bottom:1px dashed #dcdde1;
  text-align: left;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
  height: 60px;
}

.pitch {
  display: flex;
  justify-content: center;
  

  

}
ul{
  background-color:rgb(95, 168, 95);
  display:table;
  list-style:none;
  padding:0 15px;
  margin: 0 auto 20px 0;
  width:750px;
  opacity: 0.8;
  box-shadow: 
   rgb(108 105 108 / 20%) 0 2px 2px,
   rgb(108 105 108 / 20%) 0 4px 4px,
   rgb(108 105 108 / 20%) 0 8px 8px,
   rgb(108 105 108 / 20%) 0 16px 16px,
   rgb(108 105 108 / 20%) 0 32px 32px,
   rgb(108 105 108 / 20%) 0 64px 64px;
}

ul li{
  position: relative;
  border-bottom:1px dashed #dcdde1;
  text-align: left;
  padding: 10px 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
  height: 40px;
}

ul li span{
  opacity: 0.7;
  margin-left: 0px;
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
  width: 50px;
  height: 50px;
  display:inline-table;
  margin-left: 0px;
  position:absolute;
  top: 5px;
  transition: all 0.3s;
}

</style>