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
        <span class="table__lane">{{ index + 1 }}</span>
        <span class="table__horse">#{{ horse.name }}</span>
      </li>
    </ul>
  </div>

  <div class="startingGate">
    <h1>STARTING GATE</h1>
  </div>
</template>

<style scoped>
ul {
  padding: 0;

  margin: 0;
}
.table {
  display: flex;
  margin-left: 0px;
  padding-left: 10px;
  margin-top: 0px;
  height: 450px;
  white-space: nowrap;
  text-align: left;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(95, 168, 95);
  border-radius: 5px;
}
.table__item {
  border-bottom: 1px dashed white;
  list-style-type: none !important;
  padding-bottom: 49.2px;
  padding-right: 55px;
  margin-left: 0;
  padding-left: 0;
  height: 6px;
}
.table__lane {
  padding-right: 5px;
  font-size: 40px;
  justify-content: center;
  display: inline-block;
  color: #fff;
  opacity: 0.5;
  text-align: center;

  height: 100%;
}
.table__horse {
  display: inline-block;
  font-size: 20px;
  color: #fff;
  opacity: 0.5;
  text-align: center;
  height: 0%;
}

.startingGate {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 0px;
  width: 28px;
  height: 450px;
  font-size: 20px;
  margin-top: 0px;
  border-right: 5px solid black;
  border-left: 5px solid black;
  background-color: rgb(203, 72, 36);
}
</style>
