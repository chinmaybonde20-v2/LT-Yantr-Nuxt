<template>
  <div>
    <label for="tenure">Select Tenure:</label><span><tooltip /></span><br />
    <select id="tenure" @change="updateTenure">
      <option value="12">12 months</option>
      <option value="24">24 months</option>
      <option value="36">36 months</option>
    </select>
  </div>
</template>

<script>
import tooltip from "./tooltip.vue";
export default {
  components: {
    tooltip,
  },
  methods: {
    updateTenure(event) {
      this.$emit('tenure-change', parseInt(event.target.value));
    },
  },
};
</script>
