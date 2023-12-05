<template>
  <div class="drop-down-container">
    <div class="drop-down-wrapper">
      <DropDown :list-selections="COMPANIES" class="width-full" />
      <div class="ic-trashcan-wrapper" @click="handleDeleteForm"><IcTrashCan /></div>
    </div>
  </div>
</template>

<script>
import COMPANIES from "@/constants/companies";

import IcTrashCan from "@/assets/icon/IcTrashCan.vue";
import DropDown from "../DropDown/DropDown.vue";

export default {
  components: {
    IcTrashCan,
    DropDown,
  },
  data() {
    return {
      COMPANIES,
    };
  },
  methods: {
    handleDeleteForm() {
      this.$emit('delete')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./DeleteableDropDown.scss";
</style>