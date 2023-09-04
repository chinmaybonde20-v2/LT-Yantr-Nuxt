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
// 
</script>
  
  <style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-column,
.right-column {
  flex: 1;
  padding: 10px;
  width: 50%;
}

/* Additional styling for your components can be added here */
</style>
  