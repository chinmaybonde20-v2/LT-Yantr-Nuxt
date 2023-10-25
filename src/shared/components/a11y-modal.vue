<template>
    <div>
      <div class="modal-overlay" @click="closeModal" v-if="showModal"></div>
      <div class="modal" v-if="showModal">
        <slot name="modal-text"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      closeModal() {
        this.$emit("update:showModal", false);
      },
    },
  };
  </script>
  
  <style scoped>
  @import "../../../apps/assets/style.css";

  </style>
  