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
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #b4b4b4;
    padding: 20px;
    width: 400px;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    z-index: 1001;
  }
  </style>
  