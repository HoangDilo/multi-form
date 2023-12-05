<template>
  <div class="header-container">
    <p class="header-title">Đơn ứng tuyển</p>
    <div class="header-step">
      <div class="col" v-for="item in STEP" :key="item.id">
        <div class="step-icon-container">
          <div :class="item.id !== STEP[0].id ? 'line' : 'space'"></div>
          <ic-custom-step
            :value="item.id"
            :isActived="stepStore.step >= item.id"
          />
          <div :class="item.id !== STEP[STEP.length - 1].id ? 'line' : 'space'"></div>
        </div>
        <p>
          {{ item.step_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { userStepStore } from "@/stores/step";

import IcCustomStep from "@/assets/icon/IcCustomStep.vue";

import STEP from "@/constants/steps";

export default {
  components: {
    IcCustomStep,
  },
  data() {
    return {
      stepStore: userStepStore(),
      STEP,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>