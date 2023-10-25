<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <div class="input">
            <NumberInput
              name="totalLoanAmount"
              label="Total Loan Amount"
              type="number"
              :value="totalLoanAmount"
              @input-change="updateValue"
            />
          </div>
          <div class="input">
            <NumberInput
              name="termInMonths"
              label="Term (Months):"
              type="number"
              :value="termInMonths"
              @input-change="updateValue"
            />
          </div>
          <div class="input">
            <NumberInput
              name="interestRate"
              label="Interest Rate (%):"
              type="number"
              :value="interestRate"
              @input-change="updateValue"
            />
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <div class="output">
            <p id="p-head">Your estimated auto payment will be:</p>
            <h1>{{ autoPayment }}</h1>
            <div class="row">
              <div class="column">
                <div class="cards">
                  <div class="cards-header">Loan Amount:</div>
                  <div class="card-content">
                    <h3>{{ totalLoanAmount }}</h3>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="cards">
                  <div class="cards-header">Term (Months):</div>
                  <div class="card-content">
                    <h3>{{ termInMonths }}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc">
              <h3>We've found offers for this result:</h3>

              <button class="get-offer-button" @click="redirectToLink">
                Get Free Loan Offer
              </button>
              <br /><br />
              <button class="disc-btn">Disclosures</button>
            </div>
          </div>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import NumberInput from "~/src/shared/components/NumberInput.vue";
import DefaultLayout from "~/src/shared/layout/DefaultLayout.vue";

const totalLoanAmount = ref(25000);
const interestRate = ref(2.5);
const termInMonths = ref(48);
const autoPayment = ref("");

const updateValue = (data) => {
  if (data.name === "totalLoanAmount") {
    totalLoanAmount.value = data.value;
  } else if (data.name === "interestRate") {
    interestRate.value = data.value;
  }else if (data.name === "termInMonths") {
    termInMonths.value = data.value;
  }
  calculateAutoPayment()
};



const calculateAutoPayment = () => {
  const principal = totalLoanAmount.value;
  const rate = interestRate.value / 100 / 12;
  const term = termInMonths.value;

  const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
  autoPayment.value = monthlyPayment.toFixed(2);
};

const redirectToLink = () => {
  window.location.href = "https://www.v2solutions.com/#";
};

onMounted(calculateAutoPayment);
</script>

<style scoped>
@import "@/apps/assets/style.css";
</style>
