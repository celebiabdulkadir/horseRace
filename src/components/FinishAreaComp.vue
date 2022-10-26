<script setup>
const props = defineProps(["horses"]);
</script>

<template>
  <div class="finishGate">
    <h1>FINISH LINE</h1>
  </div>
  <div class="table">
    <ul>
      <li
        class="table__item"
        v-for="(horse, index) in props.horses"
        :key="index"
      >
        <!-- {{ index + 1 }} #{{ horse.name }} -->
      </li>
    </ul>
  </div>
</template>

<style scoped>
.table__item {
  display: flex;
  justify-content: left;
  align-items: center;

  padding-bottom: 50px;
  padding-right: 40px;
  margin-left: 0;
  padding-left: 0;
  width: 20px;
  height: 20px;
}

.table {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 65px;

  height: 570px;

  text-align: center;
  justify-content: flex-start;
  align-items: left;
  background-color: rgb(95, 168, 95);
}
.finishGate {
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
  background-color: rgb(29, 103, 6);
}
</style>
