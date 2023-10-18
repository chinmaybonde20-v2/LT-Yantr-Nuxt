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

.cards-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  padding: 10px;
  border: solid black 1px;
  width: 300px;
  text-align: center;
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.primary-txt {
  font-size: 32px;
  /* font-weight: 900; */
  font-family: Lato,Helvetica,Arial,sans-serif;
  color: #333;
  text-align: center;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  margin: 15px 0;
}

.card-description {
  font-size: 14px;
  color: #666;
  margin: 15px 0;
}

.btn {
  padding: 10px;
  background-color: #1abc9c;;
  color: white;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;
  text-decoration: none;
}

.btn:hover {
  background-color: #189e83;
}


</style>
