<template>
  <div class="drop-down">
    <div class="value">
        {{ listSelections[chosenIndex] }}
    </div>
    <div @click="handleDropDown" class="arrow-wrapper">
      <IcArrowDown v-if="!isDroped"/>
      <IcArrowUp v-if="isDroped"/>
    </div>
    <div :class="['options', isDroped && 'display']">
      <div class="option" v-for="(item, index) in listSelections" :key="index" @click="() => handleChose(index)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import IcArrowDown from "@/assets/icon/IcArrowDown.vue";
import IcArrowUp from '@/assets/icon/IcArrowUp.vue'

export default {
  props: {
    listSelections: Array,
  },
  components: {
    IcArrowDown,
    IcArrowUp,
  },
  data() {
    return {
      isDroped: false,
      chosenIndex: undefined,
    };
  },
  methods: {
    handleDropDown() {
      this.isDroped = !this.isDroped;
    },
    handleChose(index) {
        this.chosenIndex = index;
        this.isDroped = false
    }
  },
};
</script>

<style lang="scss" scoped>
@import './DropDown.scss';
</style>