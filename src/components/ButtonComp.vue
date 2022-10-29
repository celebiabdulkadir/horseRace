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
