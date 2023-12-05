<template>
  <div>
    <input type="text" :id="inputId" :value="value" @input="event => $emit('changeValue', event.target.value)">
  </div>
</template>

<script>
export default {
    props: {
        inputId: String,
        value: String,
    }
};
</script>

<style lang="scss" scoped>
</style>