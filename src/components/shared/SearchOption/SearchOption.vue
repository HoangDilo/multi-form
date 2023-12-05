<template>
  <div class="main-container">
    <div :class="`input-container ${isFocus ? 'focusing' : ''}`">
      <div class="additional-elements">
        <div class="icon-search-wrapper">
          <ic-search />
        </div>
        <div class="chosen-options">
          <div
            class="chosen-option"
            v-for="(item, index) in chosenOptions"
            :key="index"
          >
            <span>{{ item }}</span>
            <div @click="() => handleRemoveOption(index)" class="icon-x">
              <ic-x />
            </div>
          </div>
        </div>
      </div>
      <input
        type="text"
        :value="inputValue"
        :id="inputId"
        class="option-input"
        :placeholder="placeholder"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @input="($event) => handleInput($event)"
      />
    </div>
    <div class="options-container" v-if="options.length">
      <div
        class="option"
        v-for="(item, index) in options"
        :key="index"
        @click="() => handleChose(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
  
<script>
import positions from "@/constants/positions";

import IcSearch from "@/assets/icon/IcSearch.vue";
import IcX from "@/assets/icon/IcX.vue";

export default {
  components: {
    IcSearch,
    IcX,
  },
  props: {
    inputId: String,
    placeholder: String,
  },
  data() {
    return {
      inputValue: "",
      isFocus: false,
      options: [],
      chosenOptions: [],
      timer: undefined,
    };
  },
  methods: {
    handleInput: async function (event) {
      this.inputValue = event.target.value;
    },
    handleChose(itemName) {
      this.chosenOptions.push(itemName);

      this.inputValue = "";
    },
    handleRemoveOption(index) {
      this.chosenOptions.splice(index, 1);
    },
  },
  watch: {
    inputValue() {
      clearTimeout(this.timer);
      if (this.inputValue) {
        this.timer = setTimeout(() => {
          this.options = positions.filter((city) => {
            return (
              city
                .toLocaleLowerCase()
                .match(this.inputValue.toLocaleLowerCase()) &&
              !this.chosenOptions.includes(city)
            );
          });
        }, 300);
      } else {
        this.options.splice(0, this.options.length);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./SearchOption.scss";
</style>