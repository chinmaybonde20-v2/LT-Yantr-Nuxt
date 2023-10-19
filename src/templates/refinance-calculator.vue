<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <!-- Input 1 -->
            <div class="input-group">
              <NumberInput
                name="currMortBalance"
                label="Current Mortgage Balance::"
                type="number"
                :value="currMortBalance"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 2 -->
            <div class="input-group">
              <NumberInput
                name="monthlyPayments"
                label="Current Monthly Payment::"
                type="number"
                :value="monthlyPayments"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 3 -->
            <div class="input-group">
              <NumberInput
                name="newIntRate"
                label="New Interest Rate:"
                type="number"
                :value="newIntRate"
                @input-change="updateValue"
              />
            </div>
            <!-- Dropdown 4 -->
            <div class="input-group">
              <Dropdown
                label="New Loan Term:" 
                :options="dropdownOptions"
                :selectedOption="tenure"
                @tenure-change="updateTenure"
              />
            </div>
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <p>Loan comparison:</p>
          <div class="flex-container">
            <p class="left-text">Current Monthly Payment:</p>
            <h2 class="right-text">${{ monthlyPayments }}</h2>
          </div>
          <div class="flex-container">
            <p class="left-text">New Monthly Payment:</p>
            <h3 class="right-text txt-color">${{ newMonthlyPayment }}</h3>
          </div>
          <hr />
          <div class="flex-container">
            <p class="left-text">Refinancing Decreases your monthly payment by</p>
            <h2 class="right-text txt-color-sav">${{ monthlySaving }}</h2>
          </div>
          <button class="get-offer-button">Find Your Best Terms</button>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '../shared/layout/DefaultLayout.vue';
import NumberInput from '../shared/components/NumberInput.vue';
import Dropdown from "../shared/components/Dropdown.vue";

const currMortBalance = ref(250000);
const monthlyPayments = ref(1950);
const newIntRate = ref(6.00);
const tenure = ref(30);
const newMonthlyPayment = ref("");
const monthlySaving = ref("");
const dropdownOptions = ref([
  { value: 15, label: "15 Years" },
  { value: 30, label: "30 Years" },
]);

const updateValue = (name, value) => {
  if (name === 'currMortBalance') {
    currMortBalance.value = value;
  } else if (name === 'monthlyPayments') {
    monthlyPayments.value = value;
  } else if (name === 'newIntRate') {
    newIntRate.value = value;
  }
  calculateMonthlyPayment();
};

const updateTenure = (newTenure) => {
  tenure.value = newTenure;
  calculateMonthlyPayment();
};

const calculateMonthlyPayment = () => {
  const currBalance = currMortBalance.value;
  const monthlyPaymentValue = monthlyPayments.value;
  const interestRate = newIntRate.value / 100;
  const tenureInMonths = tenure.value * 12;

  // Perform the calculation to get the new monthly payment
  const newPayment = (currBalance * (interestRate / 12)) /
    (1 - Math.pow(1 + interestRate / 12, -tenureInMonths));

  // Calculate the monthly savings
  const savings = monthlyPaymentValue - newPayment;

  newMonthlyPayment.value = newPayment.toFixed(2);
  monthlySaving.value = savings.toFixed(2);
};

watch([currMortBalance, monthlyPayments, newIntRate, tenure], calculateMonthlyPayment);

onMounted(calculateMonthlyPayment);
</script>

<style scoped>
@import "../../apps/assets/debt-consodilation.css";
</style>
