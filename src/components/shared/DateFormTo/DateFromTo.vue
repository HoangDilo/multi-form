<template>
  <div class="date-picker-range">
    <DatePicker />
    <IcMinus />
    <DatePicker />
  </div>
</template>

<script>
import DatePicker from "@/components/shared/DatePicker/DatePicker.vue";
import IcMinus from "@/assets/icon/IcMinus.vue";

export default {
  components: {
    DatePicker,
    IcMinus,
  },
};
</script>

<style lang="scss" scoped>
.date-picker-range {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>