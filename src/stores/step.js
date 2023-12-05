import { defineStore } from "pinia";

export const userStepStore = defineStore("step", {
  state() {
    return {
      step: 1,
    };
  },
  actions: {
    nextStep() {
      this.step++;
    },
    previousStep() {
      this.step--;
    },
  },
});
