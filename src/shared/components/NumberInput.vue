<template>
  <div>
    <label :for="name">{{ label }}</label> <tooltip v-if="showToolTip" /><br />
    <input :type="type" :id="name" :value="value" @input="updateValue" />
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
    showToolTip: Boolean
  },
  methods: {
    updateValue(event) {
      this.$emit("input-change", this.name, event.target.value);
    },
  },
};
</script>

<style>
input{
  padding: 10px;
  width: 360px;
  margin: 5px;
}
</style>
