<template>
  <div class="text-area-container">
    <textarea
      name=""
      :id="inputId"
      cols="30"
      rows="10"
      class="text-area"
      :maxlength="maxLength"
      @input="handleChange"
    ></textarea>
    <span class="text-counter" v-if="maxLength">
      {{ inputValue.length }}/{{ maxLength }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    inputId: String,
    maxLength: Number,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleChange() {
      this.inputValue = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-area-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.text-area {
  resize: none;
  padding: 8px 10px;
  outline: none;
  width: 528px;
  height: 152px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  &:focus {
    border: 1px solid #1991d2;
  }
}
.text-counter {
  color: #666;
}
</style>