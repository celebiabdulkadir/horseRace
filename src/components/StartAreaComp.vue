<script setup>
const props = defineProps(["horses"]);
</script>

<template>
  <div class="table">
    <ul>
      <li
        class="table__item"
        v-for="(horse, index) in props.horses"
        :key="index"
      >
        {{ index + 1 }} #{{ horse.name }}
      </li>
    </ul>
  </div>

  <div class="startingGate">
    <h1>STARTING GATE</h1>
  </div>
</template>

<style scoped>
.table__item {
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px dashed white;
  padding-bottom: 50px;
  padding-right: 40px;
  margin-left: 0;
  padding-left: 0;
  height: 20px;
}
.startPoint {
}
.table {
  display: flex;

  padding: 0px;
  margin-top: 65px;

  height: 570px;
  white-space: nowrap;

  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(95, 168, 95);
}
.startingGate {
  margin-top: 50px;
  display: flex;
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 0px;
  width: 28px;
  height: 570px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 65px;
  border-right: 5px solid black;
  border-right: 5px solid black;
  border-left: 5px solid black;
  background-color: rgb(203, 72, 36);
}

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

/* table tr:nth-child(1) td {
  border-left: none;
} */
</style>
