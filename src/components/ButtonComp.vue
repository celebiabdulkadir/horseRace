<script setup>
const props = defineProps(["title"]);
const emit = defineEmits(["start"]);

const startButtonHandler = () => {
  emit("start");
};
</script>
<template>
  <button
    @click="startButtonHandler"
    :class="{ primary: start, secondary: restart }"
  >
    {{ props.title }}
  </button>
</template>

<style scoped>
button {
  outline: none;
  border: 0;
  padding: 10px 15px;
  border-radius: 2px;
  font-size: 15px;
  margin: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

button.primary {
  background-color: #3498db;
  color: white;
}

button.secondary {
  background-color: #34495e;
  color: white;
}
</style>
