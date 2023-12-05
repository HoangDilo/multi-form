<template>
  <div class="form-body">
    <div class="form-container" v-for="form in forms" :key="form.id">
      <p>
        {{ inputsStore.globalInputValues }}
      </p>
      <div
        class="input"
        v-for="(input, inputIndex) in form.inputs"
        :key="inputIndex"
      >
        <label :for="input.id" class="input-label">
          <ic-must v-if="input.is_required" />
          <span>{{ input.label }}</span>
        </label>
        <component
          :is="input.input_component"
          :inputId="input.id"
          :listSelections="input.options"
          :placeholder="input.placeholder"
          :validation="input.validation"
          :maxLength="input.max_length"
          @delete="() => handleDeleteForm(form.id)"
          @changeValue="
            (payload) => handleChangeValue(stepStore.step, input.id, payload)
          "
        ></component>
      </div>
    </div>
    <button class="add-form" v-if="isMultiple" @click="addForm">
      <IcPlus />
      Thêm công ty
    </button>
    <div class="buttons">
      <button @click="stepStore.nextStep()" v-if="stepStore.step < length">
        Tiếp
      </button>
      <button v-if="stepStore.step === length">Hoàn Thành</button>
      <button
        @click="stepStore.previousStep()"
        v-if="stepStore.step > 1"
        class="btn-go-back"
      >
        Quay lại
      </button>
    </div>
  </div>
</template>

<script>
import { userStepStore } from "@/stores/step";
import { useInputStore } from "@/stores/formInputValue";

import uuid from "@/utils/uuid.js";

import IcMust from "@/assets/icon/IcMust.vue";
import IcPlus from "@/assets/icon/IcPlus.vue";

export default {
  components: {
    IcMust,
    IcPlus,
  },
  props: {
    length: Number,
    inputs: Array,
    isMultiple: Boolean,
  },
  data() {
    return {
      stepStore: userStepStore(),
      inputsStore: useInputStore(),
      forms: [],
    };
  },
  methods: {
    addForm() {
      this.forms.push({
        id: uuid(),
        inputs: this.inputs,
      });
    },
    handleDeleteForm(id) {
      this.forms = this.forms.filter((form) => form.id !== id);
    },
    handleChangeValue(step, idInput, payload) {
      this.inputsStore.changeInputValue(step, idInput, payload)
    },
  },
  created() {
    this.addForm();
  },
  watch: {
    inputs() {
      this.forms.splice(0, this.forms.length);
      this.addForm();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./Form.scss";
</style>