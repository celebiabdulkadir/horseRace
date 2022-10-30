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
          <div class="close-icon">
            <ButtonComp
              @start="closeHandler"
              title="X"
              class="close-button"
            ></ButtonComp>
          </div>
          <div class="modal-body">
            <ResultTableComp
              :liveScore="props.liveScore"
              :globalScorePool="props.globalScorePool"
            ></ResultTableComp>
          </div>

          <div class="modal-footer">
            <ButtonComp
              @start="restartHandler"
              title="Restart"
              class="restart-button"
            >
              ></ButtonComp
            >
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.restart-button {
  background-color: #34495e;
  color: white;
  border-radius: 10px;
}
.close-button {
  background-color: white;
  font-size: larger;
  border-radius: 10px;
}
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
  max-height: 620px;
  max-width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-footer {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}
.close-icon {
  display: flex;
  align-items: flex-end;
  justify-content: right;
  background-color: #fff;
}
</style>
