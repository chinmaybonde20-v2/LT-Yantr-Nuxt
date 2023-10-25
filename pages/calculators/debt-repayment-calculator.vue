<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <!-- Input 1 -->
          <div class="input">
            <NumberInput
              name="loanBalance"
              label="Balance:"
              type="number"
              :value="loanBalance"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 2 -->
          <div class="input">
            <NumberInput
              name="interestRate"
              label="Interest Rate:"
              type="number"
              :value="interestRate"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 3 -->
          <div class="input">
            <NumberInput
              name="monthlyPayment"
              label="Monthly Payment:"
              type="number"
              :value="monthlyPayment"
              @input-change="updateValue"
            />
            <p>OR</p>
          </div>

          <!-- Input 4 -->
          <div class="input">
            <NumberInput
              name="payoffTimeframe"
              label="Payoff Timeframe:"
              type="number"
              :value="payoffTimeframe"
              @input-change="updateValue"
            />
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <table class="custom-table">
            <tr>
              <td>
                <p class="table-flex">You would pay off your debt in:</p>
              </td>
              <td>
                <p id="p3">{{ payOffDebts }} months</p>
              </td>
            </tr>
            <hr>
            <tr>
              <td>
                <p class="table-flex">Your monthly payment would be:</p>
              </td>
              <td>
                <p id="p3">${{ monthlyPayment }}</p>
              </td>
            </tr>
          </table>

          <button class="get-offer-button" @click="redirectToLink">
            Find Your Best Terms
          </button>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import NumberInput from "~/src/shared/components/NumberInput.vue";
import DefaultLayout from "~/src/shared/layout/DefaultLayout.vue";

const loanBalance = ref(9000);
const interestRate = ref(8.0);
const monthlyPayment = ref(125.0);
const payoffTimeframe = ref(0);
const newMonthlyPayment = ref(null);
const payOffDebts = ref(98);


const updateValue = (data) => {
  if (data.name === "loanBalance") {
    loanBalance.value = data.value;
  } else if (data.name === "interestRate") {
    interestRate.value = data.value;
  } else if (data.name === "monthlyPayment") {
    monthlyPayment.value = data.value;
  } else if (data.name === "payoffTimeframe") {
    payoffTimeframe.value = data.value;
  }
  calculateValues()
};

const calculateValues = () => {
  const r = interestRate.value / 100 / 12;
  const L = loanBalance.value;
  const P = monthlyPayment.value;

  if (payoffTimeframe.value === 0) {
    const n = -(Math.log(1 - (r * P) / L) / Math.log(1 + r));
    payOffDebts.value = Math.round(n);
  } else {
    payOffDebts.value = payoffTimeframe.value;
  }

  if (monthlyPayment.value === 0) {
    const n = payOffDebts.value;
    newMonthlyPayment.value = (
      (L * (r * Math.pow(1 + r, n))) /
      (Math.pow(1 + r, n) - 1)
    ).toFixed(2);
  } else {
    newMonthlyPayment.value = monthlyPayment.value;
  }
};

const redirectToLink = () => {
  window.location.href = "https://www.v2solutions.com/#";
};

onMounted(calculateValues);
</script>

<style scoped>
@import "@/apps/assets/style.css";
</style>
