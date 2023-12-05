<template>
  <div class="multi-form-container">
    <FormHeader />
    <Form
      :length="forms.length"
      :inputs="configInputs"
      :isMultiple="configForm(stepStore.step).isMultiple"
    ></Form>
  </div>
</template>

<script>
import { userStepStore } from "@/stores/step";

import forms from "@/constants/forms";

import FormHeader from "@/components/layout/FormHeader/FormHeader.vue";
import Form from "./Form/Form.vue";

export default {
  components: {
    FormHeader,
    Form,
  },
  data() {
    return {
      stepStore: userStepStore(),
      forms,
    };
  },
  methods: {
    configForm(step) {
      return forms.find((form) => form.step === step);
    },
  },
  computed: {
    configInputs() {
      const form = this.configForm(this.stepStore.step);
      return form.inputs;
    },
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>