<script setup>
const props = defineProps(["liveScore"]);
</script>
<template>
  <div style="overflow-x: auto">
    <div class="header">
      <h1>Result Score</h1>
    </div>

    <table class="table">
      <thead>
        <tr>
          <td><b>Order</b></td>
          <td><b>Horse</b></td>
          <td><b>Lane</b></td>
        </tr>
      </thead>
      <tr v-for="(horse, index) in props.liveScore" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ horse.name }}</td>
        <td>#{{ horse.lane }}</td>
      </tr>
    </table>
  </div>
</template>
<style lang="scss" scoped>
table {
  background-color: white;
  display: table;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

table tr {
  position: flex;
  border-bottom: 1px dashed #dcdde1;
  padding: 10px 5px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  text-align: center;
}

table td {
  border: 1px dashed #dcdde1;
  margin-left: 10px;
  text-align: center;
}
table th {
  text-align: center;
}
.header {
  background-color: white;
}
</style>
