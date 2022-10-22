<script setup>
const props = defineProps(['title']);
const emit = defineEmits(['start',]);

const startButtonHandler = () => {
    emit('start')
}
</script>
<template>
<button @click="startButtonHandler" class="btn">{{props.title}}</button>
</template>

<style scoped>
.btn{
    border-radius: 25px;
    margin-bottom: 20px;
}

</style>
