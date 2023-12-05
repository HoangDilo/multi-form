import { defineStore } from "pinia";

export const useInputStore = defineStore("input-store", {
  state() {
    return {
      globalInputValues: [
        {
          step: 1,
          infoInputValues: [
            {
              id: "txtName",
              value: "",
            },
            {
              id: "dateDateOfBirth",
              value: "",
            },
          ],
        },
      ],
    };
  },
  actions: {
    changeInputValue(step, inputId, payload) {
      const form = this.globalInputValues.find((form) => form.step === step)
      const input = form.infoInputValues.find(input => input.id === inputId)
      input.value = payload
    },
  },
});
