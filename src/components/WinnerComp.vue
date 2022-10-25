<script setup>
const props = defineProps(["liveScore"]);
</script>

<template>
  <div>The winner is #{{ props.liveScore[0].name }}</div>
</template>
