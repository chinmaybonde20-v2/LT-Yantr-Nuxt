<template>
  <div class="container">
    <div class="left-column">
      <slot name="leftColumn"></slot>
    </div>
    <div class="right-column">
      <slot name="rightColumn"></slot>
    </div>
  </div>
  <hr />
</template>

<script setup>
</script>

<style scoped>
@import "../../../apps/assets/style.css";
</style>
