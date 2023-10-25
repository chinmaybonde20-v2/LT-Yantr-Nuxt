<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <!-- Input 1 -->
          <div class="input">
            <NumberInput
              name="currMortBalance"
              label="Current Mortgage Balance::"
              type="number"
              :value="currMortBalance"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 2 -->
          <div class="input">
            <NumberInput
              name="monthlyPayments"
              label="Current Monthly Payment::"
              type="number"
              :value="monthlyPayments"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 3 -->
          <div class="input">
            <NumberInput
              name="newIntRate"
              label="New Interest Rate:"
              type="number"
              :value="newIntRate"
              @input-change="updateValue"
              :showToolTip="showToolTip"
            />
          </div>
          <!-- Dropdown 4 -->
          <div class="input">
            <Dropdown
              label="New Loan Term:"
              :options="dropdownOptions"
              :selectedOption="tenure"
              @tenure-change="updateTenure"
              @input-change="updateValue('tenure', $event)"
              :showToolTip="showToolTip"
            />
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <b><p id="p-head">Loan comparison:</p></b>
          <div class="output">
            <div class="flex-container">
              <p id="p2">Current Monthly Payment:</p>
              <h2 class="right-text">${{ monthlyPayments }}</h2>
            </div>
            <div class="flex-container">
              <p id="p2">New Monthly Payment:</p>
              <h2 class="txt-color">${{ newMonthlyPayment }}</h2>
            </div>
            <hr />
            <div class="flex-container">
              <p id="p2">
                Refinancing
                {{ monthlySaving >= 0 ? "Decreases" : "Increases" }} your
                monthly payment by &nbsp &nbsp;
              </p>
              <h2 class="right-text txt-color-sav">${{ monthlySaving }}</h2>
            </div>

            <button class="get-offer-button" @click="redirectToLink">
              Compare Refinance Offers
            </button>
          </div>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import NumberInput from "~/src/shared/components/NumberInput.vue";
import DefaultLayout from "~/src/shared/layout/DefaultLayout.vue";
import Dropdown from "~/src/shared/components/Dropdown.vue";

const currMortBalance = ref(250000);
const monthlyPayments = ref(1950);
const newIntRate = ref(6.0);
const tenure = ref(30);
const newMonthlyPayment = ref("");
const monthlySaving = ref("");
const dropdownOptions = ref([
  { value: 15, label: "15 Years" },
  { value: 30, label: "30 Years" },
]);
const showToolTip = ref(true);

const updateValue = (data) => {
  if (data.name === "currMortBalance") {
    currMortBalance.value = data.value;
  } else if (data.name === "monthlyPayments") {
    monthlyPayments.value = data.value;
  } else if (data.name === "newIntRate") {
    newIntRate.value = data.value;
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
  const newPayment =
    (currBalance * (interestRate / 12)) /
    (1 - Math.pow(1 + interestRate / 12, -tenureInMonths));

  // Calculate the monthly savings
  const savings = monthlyPaymentValue - newPayment;

  newMonthlyPayment.value = newPayment.toFixed(2);
  monthlySaving.value = savings.toFixed(2);
};

const redirectToLink = () => {
  window.location.href =
    "https://www.v2solutions.com/#";
};
watch(
  [currMortBalance, monthlyPayments, newIntRate, tenure],
  calculateMonthlyPayment
);

onMounted(calculateMonthlyPayment);
</script>

<style scoped>
@import "@/apps/assets/style.css";
</style>
