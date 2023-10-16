<template>
  <div>
    <label for="tenure">{{ label }}</label><span><tooltip /></span><br />
    <select id="tenure" @change="updateTenure" class="option">
      <option v-for="option in options" :value="option.value" >{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
import tooltip from "./tooltip.vue";

export default {
  components: {
    tooltip,
  },
  props: {
    label: String,
    options: {
      type: Array,
      required: true,
    },
    selectedOption: Number,
  },
  methods: {
    updateTenure(event) {
      this.$emit('tenure-change', parseInt(event.target.value));
    },
  },
};
</script>
<style>
.option{
  padding: 10px;
  width: 385px;
}
</style>