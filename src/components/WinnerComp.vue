<script setup>

const props = defineProps(['liveScore'])
</script>

<template>
<div > <hr>The winner is  #{{props.liveScore[0].name}} <hr> </div>

</template>