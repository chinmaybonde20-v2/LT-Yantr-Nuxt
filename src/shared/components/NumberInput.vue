<template>
  <div>
    <label :for="name">{{ label }}:</label> <span><tooltip /></span><br />
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
  },
  methods: {
    updateValue(event) {
      this.$emit("input-change", this.name, event.target.value);
    },
  },
};
</script>
