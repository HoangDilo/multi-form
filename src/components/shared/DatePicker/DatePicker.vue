<template>
  <input type="date" :id="inputId" class="date-picker" @change="handleChange"/>
</template>

<script>
export default {
  props: {
    inputId: String,
    value: String,
  },
  methods: {
    handleChange() {
      console.log(event.target.value);
    }
  },
};
</script>

<style lang="scss" scoped>
.date-picker {
  width: fit-content;
}
</style>