<template>
  <div>
    <label :for="name">{{ label }}</label>
    <tooltip v-if="showToolTip" /><br />
    <input :type="type" :id="name" v-model="inputValue" @input="emitUpdateValue" />
  </div>
</template>

<script>
import tooltip from "./tooltip.vue";
export default {
  components: {
    tooltip,
  },
  props: {
    name: String,
    label: String,
    type: String,
    value: String,
    showToolTip: Boolean,
  },
  data() {
    return {
      inputValue: this.value, // Initialize inputValue with the prop value
    };
  },
  methods: {
    emitUpdateValue() {
      this.$emit("input", this.inputValue); // Emit the input event with the new value
      this.$emit("input-change", this.name, this.inputValue); // Emit your custom input-change event
    },
  },
};
</script>

<style>
input {
  padding: 10px;
  width: 360px;
  margin: 5px;
}
</style>
