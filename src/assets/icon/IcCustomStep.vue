<template>
  <div
    :class="{
      'step-icon': true,
      actived: isActived,
    }"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    isActived: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.step-icon {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: #dbdbdb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  min-width: 32px;
}

.actived {
  background: #617d98;
}
</style>