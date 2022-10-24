<script setup>
const props = defineProps(['scoreboard'])
</script>
<template>
    <div style="overflow-x:auto" >
    <div class="header">
     <h1 >Result Score</h1>
    </div>

    <table class="table">
    <thead>
        <tr>
                <td> <b>Order</b> </td>
                <td> <b>Horse</b> </td>
                <td> <b>Lane</b></td>


        </tr>
    </thead>
        <tr v-for="(horse,index) in props.scoreboard " :key="index">
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