<template>
  <div>
    <div class="input-top">
      <div>
        <b>
          <p id="p3">Current Loan:</p>
        </b>
        <div class="row">
          <div>
            <NumberInput
              name="currentBalance"
              label="Current Balance:"
              type="number"
              :value="currentBalance"
              @input-change="updateValue"
              :showToolTip="showToolTip"
            />
          </div>
          <div>
            <NumberInput
              name="currentMonthlyPayment"
              label="Monthly Payment:"
              type="number"
              :value="currentMonthlyPayment"
              @input-change="updateValue"
            />
          </div>
          <div>
            <NumberInput
              name="currentInterestRate"
              label="Interest Rate:"
              type="number"
              :value="currentInterestRate"
              @input-change="updateValue"
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <b>
          <p id="p3">Refinance Loan:</p>
        </b>

        <div class="row">
          <div>
            <NumberInput
              name="refinanceLoanAmount"
              label="Loan Amount:"
              type="number"
              :value="refinanceLoanAmount"
              @input-change="updateValue"
            />
          </div>
          <div>
            <Dropdown
              label="Loan Term:"
              :showToolTip="showToolTip"
              @tenure-change="updateTenure"
              
              :options="dropdownOptions"
              :selectedOption="tenure"
              
              
            />
          </div>
          <div>
            <NumberInput
              name="refinanceInterestRate"
              label="Interest Rate:"
              type="number"
              :value="refinanceInterestRate"
              @input-change="updateValue"
            />
          </div>
        </div>
      </div>
      <br />
    </div>

    <div class="output">
      <br />
      <p id="p1">Refinancing results</p>
      <p id="p2">Your estimated savings over the life of the loan</p>
      <h1>${{ estimatedSavings.toFixed(2) }}</h1>

      <button class="get-offer-button" @click="redirectToLink">
        See Refinance Offers
      </button>

      <br /><br />
    </div>
    <div class="row card-div">
      <div class="card">
        <div class="card-header">MONTHLY PAYMENT</div>
        <div class="card-content">
          <div class="row">
            <div class="left">
              <h3>{{ currentMonthlyPayment }}</h3>
            </div>
            <div class="vs"><h3>vs</h3></div>
            <div class="right"><h3>643</h3></div>
          </div>
          <p style="width: 100%">
            Refinancing Increases your monthly payments by $14
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">REMAINING MONTHS</div>
        <div class="card-content">
          <div class="row">
            <div class="left">
              <h3>{{ currentMonths }}</h3>
            </div>
            <div class="vs"><h3>vs</h3></div>
            <div class="right">
              <h3>{{ refinanceMonths }}</h3>
            </div>
          </div>
          <p style="width: 100%">
            Refinancing Increases your monthly payments by $14
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">REMAINING INTEREST <tooltip /></div>
        <div class="card-content">
          <div class="row">
            <div class="left">
              <h3>{{ currentMonthlyInterest }}</h3>
            </div>
            <div class="vs"><h3>vs</h3></div>
            <div class="right">
              <h3>{{ refinanceMonthlyInterests }}</h3>
            </div>
          </div>
          <p style="width: 100%">
            Refinancing Increases your monthly payments by $14
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import NumberInput from "~/src/shared/components/NumberInput.vue";
import Dropdown from "~/src/shared/components/Dropdown.vue";
import tooltip from "~/src/shared/components/tooltip.vue";

const currentBalance = ref(45000);
const currentMonthlyPayment = ref(650);
const currentInterestRate = ref(3.99);
const tenure = ref(6);
const currentMonths = ref(504);
const refinanceMonths = ref(540);
const refinanceInterestRate = ref(1.99);
const refinanceLoanAmount = ref(45000);
const currentMonthlyInterest = ref(620);
const refinanceMonthlyInterests = ref(640);
const dropdownOptions = ref([
  { value: 7, label: "7 Year" },
  { value: 6, label: "6 Years" },
  { value: 5, label: "5 Years" },
  { value: 4, label: "4 Years" },
  { value: 3, label: "3 Years" },
  { value: 2, label: "2 Years" },
]);
const showToolTip = ref(true);
const estimatedSavings = ref(0);




const updateValue = (data) => {
  if (data.name === "currentBalance") currentBalance.value = data.value;
  else if (data.name === "currentMonthlyPayment")
    currentMonthlyPayment.value = data.value;
  else if (data.name === "currentInterestRate") currentInterestRate.value = data.value;
  else if (data.name === "refinanceLoanAmount") refinanceLoanAmount.value = data.value;
  else if (data.name === "refinanceInterestRate")
    refinanceInterestRate.value = data.value;

  calculateSavings();
};

const updateTenure = (newTenure) => {
  tenure.value = newTenure;
};

const addNum = () => {
  estimatedSavings.value = currentBalance.value - refinanceLoanAmount.value;
};

const calculateSavings = () => {
  const currentMonthlyInterest = currentInterestRate.value / 100 / 12;
  const refinanceMonthlyInterest = refinanceInterestRate.value / 100 / 12;

  const currentMonths = tenure.value * 12;
  console.log("currentMonths", currentMonths);
  const refinanceMonths = tenure.value * 12;
  console.log("refinanceMonths", refinanceMonths);
  const totalCostCurrentLoan =
    currentMonthlyPayment.value * currentMonths +
    currentMonthlyInterest * currentBalance.value * currentMonths;
  const totalCostRefinanceLoan =
    currentMonthlyPayment.value * refinanceMonths +
    refinanceMonthlyInterest * refinanceLoanAmount.value * refinanceMonths;

  estimatedSavings.value = Number(
    (totalCostCurrentLoan - totalCostRefinanceLoan).toFixed(0)
  );
};
const redirectToLink = () => {
  window.location.href = "https://www.v2solutions.com/#";
};
onMounted(calculateSavings);
</script>

  
  <style scoped>
@import "@/apps/assets/style.css";
</style>
  

