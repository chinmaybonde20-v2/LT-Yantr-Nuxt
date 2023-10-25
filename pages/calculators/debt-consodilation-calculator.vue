<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <div class="input">
            <NumberInput
              name="loanBalance"
              label="Loan Balance:"
              type="number"
              :value="loanBalance"
              @input-change="updateValue"
            />
          </div>
          <div class="input">
            <NumberInput
              name="monthlyPayments"
              label="Monthly Payment:"
              type="number"
              :value="monthlyPayments"
              @input-change="updateValue"
            />
          </div>
          <div class="input">
            <NumberInput
              name="consoLoanRate"
              label="Consolidation Loan Rate: "
              type="number"
              :value="consoLoanRate"
              @input-change="updateValue"
              :showToolTip="showToolTip"
            />
          </div>
          <div class="input">
            <Dropdown
              label="Loan Term"
              :options="dropdownOptions"
              :selectedOption="tenure"
              @tenure-change="updateTenure"
              :showToolTip="showToolTip"
            />
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div class="output">
          <table class="custom-table">
            <tr>
              <td>
                <p class="table-flex">Consolidation loan amount:</p>
              </td>
              <td>
                <p id="p3">${{ loanBalance }}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p class="table-flex">New Monthly Payment:</p>
              </td>
              <td>
                <p id="p3">${{ newMonthlyPayment }}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p class="table-flex">
                  Your Monthly Savings Would Be:&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </td>
              <td>
                <p id="p3">${{ monthlySaving }}</p>
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
import { ref, onMounted } from 'vue';
import NumberInput from "~/src/shared/components/NumberInput.vue";
import DefaultLayout from "~/src/shared/layout/DefaultLayout.vue";
import Dropdown from "~/src/shared/components/Dropdown.vue";

const loanBalance = ref(25000);
const monthlyPayments = ref(1000);
const consoLoanRate = ref(7.99);
const tenure = ref(5);
const newMonthlyPayment = ref('');
const monthlySaving = ref('');
const dropdownOptions = ref([
  { value: 1, label: '1 Year' },
  { value: 2, label: '2 Years' },
  { value: 3, label: '3 Years' },
  { value: 4, label: '4 Years' },
  { value: 5, label: '5 Years' },
  { value: 6, label: '6 Years' },
  { value: 7, label: '7 Years' },
  { value: 8, label: '8 Years' },
  { value: 9, label: '9 Years' },
  { value: 10, label: '10 Years' },
]);
const showToolTip = ref(true);

const updateValue = (data) => {
  if (data.name === 'loanBalance') {
    loanBalance.value = data.value;
  } else if (data.name === 'monthlyPayments') {
    monthlyPayments.value = data.value;
  } else if (data.name === 'consoLoanRate') {
    consoLoanRate.value = data.value;
  }
  calculateMonthlyPayment();
};

const updateTenure = (newTenure) => {
  tenure.value = newTenure;
  calculateMonthlyPayment();
};

const calculateMonthlyPayment = () => {
  const loanBalanceValue = loanBalance.value;
  const monthlyPaymentsValue = monthlyPayments.value;
  const consoLoanRateValue = consoLoanRate.value / 100;
  const tenureInMonths = tenure.value * 12;

  const newMonthlyPaymentValue =
    (loanBalanceValue * (consoLoanRateValue / 12)) /
    (1 - Math.pow(1 + consoLoanRateValue / 12, -tenureInMonths));

  const monthlySavingValue = monthlyPaymentsValue - newMonthlyPaymentValue;

  newMonthlyPayment.value = newMonthlyPaymentValue.toFixed(2);
  monthlySaving.value = monthlySavingValue.toFixed(2);
};

const redirectToLink = () => {
  window.location.href = 'https://www.v2solutions.com/#';
};

onMounted(calculateMonthlyPayment);
</script>

<style scoped>
@import '@/apps/assets/style.css';
</style>
