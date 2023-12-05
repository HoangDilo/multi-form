<script>
import IcUpload from "@/assets/icon/IcUpload.vue";

export default {
  props: {
    maxFile: {
      type: Number,
      default: 3,
    },
    maxSize: {
      type: Number,
      default: 10 * 1024,
    },
    validation: Array,
  },
  components: {
    IcUpload,
  },
  data() {
    return {
      fileChosen: undefined,
      isError: false,
      errorMessage: "",
    };
  },
  methods: {
    handleDragOver() {
      event.preventDefault();
    },
    handleDropFile() {
      event.preventDefault();
      this.validator(event.dataTransfer.files[0]);
    },
    handleChoseFile() {
      this.validator(event.target.files[0]);
    },
    validator(file) {
      let result = true;
      this.validation.forEach((item) => {
        if (result) {
          if (item.validator(file)) {
            this.isError = false;
          } else {
            this.isError = true;
            this.errorMessage = item.errorMessage;
            result = false;
          }
        }
      });
      if (result) {
        this.fileChosen = file;
      }
    },
  },
  watch: {
    isError() {
      if (!this.isError) {
        this.errorMessage = "";
      }
    },
  },
};
</script>

<template>
  <div class="main-container-wrapper">
    <div
      :class="['main-container', isError ? 'error' : '']"
      @dragover="handleDragOver"
      @drop="handleDropFile"
    >
      <div class="drop-area">
        <div class="content">
          <ic-upload></ic-upload>
          <div class="text">
            <p class="desc">Hãy kéo và thả ảnh vào đây hoặc</p>
            <label for="file-uploader" class="label-uploader"
              >nhấn vào đây</label
            >
            <input
              type="file"
              id="file-uploader"
              hidden
              @change="handleChoseFile"
            />
          </div>
        </div>
      </div>
    </div>
    <p class="error-message" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <span class="file-name" v-if="fileChosen">
      {{ fileChosen.name }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "./DropArea.scss";
</style>