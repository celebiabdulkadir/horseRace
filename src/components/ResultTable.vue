<script setup>
const props = defineProps(['liveScore'])
</script>
<template>
    <div v-for="(horse,index) in props.liveScore " :key="index"> #{{index + 1}} {{horse.name}} </div>
</template>