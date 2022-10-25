<script setup>
const props = defineProps(["horses"]);
</script>

<template>
  <div class="table">
    <table>
      <thead>
        <tr class="header">
          <td><b>Lane</b></td>
          <td><b>Horse</b></td>
        </tr>
      </thead>
      <tr v-for="(horse, index) in props.horses" :key="index">
        <td>#{{ horse.lane }}</td>
        <td>{{ horse.name }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  box-shadow: rgb(108 105 108 / 20%) 0 2px 2px, rgb(108 105 108 / 20%) 0 4px 4px,
    rgb(108 105 108 / 20%) 0 8px 8px, rgb(108 105 108 / 20%) 0 16px 16px,
    rgb(108 105 108 / 20%) 0 32px 32px, rgb(108 105 108 / 20%) 0 64px 64px;
}

table td {
  position: flex;

  border-bottom: 1px dashed black;
  border-left: 1px dashed black;
  border-collapse: collapse;

  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  height: 65px;
  padding-right: 60px;
  align-items: center;
  /* background-color: rgb(95, 168, 95); */
  opacity: 0.8;
}

table tr:nth-child(1) td {
  border-left: none;
}
</style>
