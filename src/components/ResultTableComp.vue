<script setup>
const props = defineProps(['liveScore','scoreboard'])
</script>
<template>

<!-- <td v-for="(horse,index) in props.liveScore " :key="index"> {{index +1}}. {{horse.name}}</td> -->
<div style="overflow-x:auto" >
    <div class="header">
     <h1 v-if="props.scoreboard.length > 7">Result Score</h1>
     <h1 v-else> Live Score</h1>
    </div>

    <table class="table">
    <thead>
        <tr>
                <td> <b>Order</b> </td>
                <td> <b>Horse</b> </td>
                <td> <b>Lane</b></td>


        </tr>
    </thead>
        <tr v-for="(horse,index) in props.liveScore " :key="index" :style="{ 'backgroundColor': horse.score  ? '#3498db' : '' }">
            <td>{{index + 1}}</td>
            <td>{{horse.name}}</td>
            <td>#{{horse.lane}}</td>
        </tr>

</table>
</div>
</template>



<style lang="scss" scoped>
table{
  background-color:white;
  display: table;
  padding:0 15px;
  margin: 0 auto 20px auto;
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  box-shadow: 
   rgb(108 105 108 / 20%) 0 2px 2px,
   rgb(108 105 108 / 20%) 0 4px 4px,
   rgb(108 105 108 / 20%) 0 8px 8px,
   rgb(108 105 108 / 20%) 0 16px 16px,
   rgb(108 105 108 / 20%) 0 32px 32px,
   rgb(108 105 108 / 20%) 0 64px 64px;
}

table tr{
  position: flex;
  border-bottom:1px dashed #dcdde1;
  padding: 10px 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
  text-align: center;
  opacity: 0.6;
}

table td{
border:1px dashed #dcdde1;
  margin-left: 10px;
  text-align: center
}
table th {
    text-align: center;
}
.header{
    background-color:white;
}



</style>