<template>
  <div class="container">
    <h1 class="primary-txt">LendingTree Yantr Widgets</h1>
    <div class="cards-body">
      <div
        class="card"
        v-for="(calculator, index) in calculatorsList"
        :key="index"
      >
        <img :src="calculator.imageUrl" alt="calc.png" />
        <div class="card-content">
          <h2 class="card-title">{{ calculator.name }}</h2>
          <p class="card-description">{{ calculator.description }}</p>
          <nuxt-link class="btn" :to="calculator.to">{{
            calculator.buttonText
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { calculatorsList } from "./calculators-list";
</script>

<style scoped>
@import "../../apps/assets/calc-list.css";
</style>
