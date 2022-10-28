<script setup>
import ResultTableComp from "@/components/ResultTableComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
const props = defineProps(["show", "liveScore", "globalScorePool"]);
const emits = defineEmits(["close", "restart"]);

const closeHandler = () => {
  emits("close");
};
const restartHandler = () => {
  emits("restart");
};
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="closeIcon">
            <ButtonComp @start="closeHandler" title="X"></ButtonComp>
          </div>
          <div class="modal-body">
            <ResultTableComp
              :liveScore="props.liveScore"
              :globalScorePool="props.globalScorePool"
            ></ResultTableComp>
          </div>

          <div class="modal-footer">
            <ButtonComp @start="restartHandler" title="Restart"></ButtonComp>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 620px;
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.closeIcon {
  display: flex;
  align-items: flex-end;
  justify-content: right;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: flex;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
