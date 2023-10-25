<template>
  <div>
    <label :for="label">{{ label }}</label>
    <tooltip v-if="showToolTip" /><br />
    <select @change="updateTenure" class="option">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        class="option"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";
import tooltip from "./tooltip.vue";

const props = defineProps({
  label: String,
  options: {
    type: Array as () => Array<{ value: number; label: string }>,
    required: true,
  },
  selectedOption: Number,
  showToolTip: Boolean,
});

const emits = defineEmits(["tenure-change"]);

const updateTenure = (event: Event) => {
  if (event.target instanceof HTMLSelectElement) {
    emits("tenure-change", parseInt(event.target.value, 10));
  }
};
</script>

<style scoped>
@import "../../../apps/assets/style.css";
</style>
