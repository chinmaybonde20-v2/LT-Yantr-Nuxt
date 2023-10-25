<template>
  <div>
    <div class="">
      <h1 class="primary-txt">V2 Calculators Widgets</h1>
      <div class="country-selector">
        <label for="country-select">Select Country:</label>
        <select id="country-select" v-model="selectedCountry" class="dropdown">
          <option value="us">US</option>
          <option value="india">India</option>
        </select>
      </div>
    </div>
    <hr />
    <div class="cards-body">
      <div
        class="card"
        v-for="calculator in displayCalculatorsArray"
        :key="calculator.id"
      >
        <img
          :src="calculator.imageUrl"
          alt="calculator image"
          class="calculator-image"
        />
        <div class="card-content">
          <h2 class="card-title">{{ calculator.name }}</h2>
          <p class="card-description">{{ calculator.description }}</p>
          <router-link :to="calculator.to" class="btn">{{
            calculator.buttonText
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { usCalculatorsList, indianCalculatorsList } from "./calculators-list";
const selectedCountry = ref("us");

type Calculator = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  buttonText: string;
  to: string;
};

const displayCalculatorsArray: Calculator[] = computed(() => {
  return selectedCountry.value === "us"
    ? usCalculatorsList.value
    : indianCalculatorsList.value;
});
</script>

<style scoped>
@import "@/apps/assets/style.css";
</style>
