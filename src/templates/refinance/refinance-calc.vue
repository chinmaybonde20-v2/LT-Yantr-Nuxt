<template>
  <div>
    <DefaultLayout>
      <!-- LEFT -->
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <!-- input component -->
            <div class="input-group">
              <label for="refiance"
                >Loan Amount <span><tooltip :pageId="'refinance'" /></span>
              </label>

              <input
                id="loan-amount"
                type="number"
                v-model="loanAmount"
                @input="calculateAmount"
              />
            </div>
            <!-- input component -->
            <div class="input-group">
              <label for="interest-rate">Interest Rate</label>
              <input
                id="interest-rate"
                type="number"
                v-model="interestRate"
                @input="calculateAmount"
              />
            </div>
            <!-- dropdown component -->
            <div class="input-group">
              <label for="loan-term">Loan Term</label>
              <select
                id="loan-term"
                v-model="loanTerm"
                @input="calculateAmount"
              >
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
              </select>
            </div>
          </div>
        </div>
      </template>
      <!-- RIGHT -->
      <template v-slot:rightColumn>
        <div class="right-column">
          <h3 class="title">Your monthly payment will be:</h3>
          <h1 class="amount">{{ formattedAmount }}</h1>
          <h3>Ready for the next step?</h3>
          <button class="get-offer-button">Get Free Loan Offer</button>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>

<script setup>
import {
  loanAmount,
  interestRate,
  loanTerm,
  formattedAmount,
  calculateAmount,
} from "~/src/templates/loan-payment/loan-payment-calc.ts";
import DefaultLayout from "../../shared/layout/DefaultLayout.vue";
import tooltip from "../../shared/components/tooltip.vue";

</script>

<style scoped>
@import "./refinance-calc.css";
</style>
