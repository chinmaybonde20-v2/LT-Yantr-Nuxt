<template>
  <div>
    <label :for="name">{{ label }}</label>
    <tooltip v-if="showToolTip" /><br />
    <input
      :type="type"
      :id="name"
      v-model="inputValue"
      @input="emitUpdateValue"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";
import tooltip from "./tooltip.vue";

const props = defineProps({
  name: String,
  label: String,
  type: String,
  value: String,
  showToolTip: Boolean,
  chinmayBoxInParent: String,
});

const inputValue = ref(props.value);

const emits = defineEmits(["input-change"]);

const emitUpdateValue = () => {
  emits("input-change", { name: props.name, value: inputValue.value });
};
</script>

<style scoped>
@import "../../../apps/assets/style.css";
</style>
