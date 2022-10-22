<script setup>

const props = defineProps(['topDistance', 'barWidth', 'imageUrl', 'title', 'customColor', 'barCount']);


</script>
<template>
    <div class=" box" :style="{top: props.topDistance}">
    <div class="chartItemWrapper"  >
        <div>
            <!-- <img class="chartItemLogo"  :src="props.imageUrl" alt=""  > -->
        </div>
        <div class="chartItem" :style="{backgroundColor:props.customColor,marginLeft: props.barWidth + '%'}">{{props.title}}</div>
        <div class="chartItemrightText">{{props.barCount}}</div>

    </div>
</div>
</template>

<style scoped>

.box {
    position:absolute;
    display: flex;
    min-width: 1000px;
	height: 40px;
    background: gray;
}
.chartItemLogo{
    object-fit: fill;
    width: 30px ;
    height: 30px;
    border-radius: 10px;
    margin-right: 10px;
    /* margin-left: 0%; */

}
.chartItemrightText{
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
}
.chartItem{
    position: absolute;
    width: 80px;
    margin-left: 0%;
    display:flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 1px solid #fefefe;
    height: 30px;
    transition: all 1s ease-in;
    border-radius: 5px;
    border: 5px solid white
}

.chartItemWrapper{
    position:relative;
    display: flex;
    height: 40px;
    align-items: center;
    transition: all 1s ease-in;
    

}

</style>