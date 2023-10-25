<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <div class="input">
            <NumberInput
              name="totalBalance"
              label="Total Balance of All Loans"
              type="number"
              :value="totalBalance"
              @input-change="updateValue"
            />
          </div>
          <div class="input">
            <NumberInput
              name="numPaymentsLeft"
              label="Number of Monthly Payments Left on Loans"
              type="number"
              :value="numPaymentsLeft"
              @input-change="updateValue"
            />
          </div>
          <div class="input">
            <NumberInput
              name="totalMonthlyPayment"
              label="Total Monthly Payment"
              type="number"
              :value="totalMonthlyPayment"
              @input-change="updateValue"
            />
          </div>
          <div class="input">
            <Dropdown
              label="Refinance Rate Term:"
              :options="dropdownOptions"
              :selectedOption="tenure"
              @tenure-change="updateTenure"
              :showToolTip="showToolTip"
            />
          </div>
          <div class="input">
            <NumberInput
              name="refinanceInterestRate"
              label="Refinance Interest Rate"
              type="number"
              :value="refinanceInterestRate"
              @input-change="updateValue"
              :showToolTip="showToolTip"
            />
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <div class="output">
            <p id="p1">Your estimated monthly savings would be:</p>
            <h1>{{ monthlyPayment }}</h1>
            <p id="p2">Lifetime Savings: {{ lifetimeSavings }}</p>

            <button class="get-offer-button" @click="redirectToLink">
              View Free Loan Offers
            </button>
          </div>

          <div class="mb-mt">
            <hr />
            <p id="p1">Student loan refinance breakdown</p>
            <div class="table-responsive">
              <table class="table">
                <tr>
                  <th class="th"></th>
                  <th class="th"><b>Current Loan</b></th>
                  <th class="th"><b>Refinanced Loan</b></th>
                </tr>
                <tr>
                  <td class="td"><b>Interest Rate</b></td>
                  <td class="td">{{ currentLoanInterestRate.toFixed(2) }} %</td>
                  <td class="td">
                    {{ refinanceLoanInterestRate.toFixed(2) }} %
                  </td>
                </tr>
                <tr>
                  <td class="td"><b>Monthly Payment</b></td>
                  <td class="td">
                    ${{ currentLoanMonthlyPayment.toFixed(2) }}
                  </td>
                  <td class="td">
                    ${{ refinanceLoanMonthlyPayment.toFixed(2) }}
                  </td>
                </tr>
                <tr>
                  <td class="td"><b>Months to Pay Off</b></td>
                  <td class="td">{{ currentLoanMonthsToPayOff }} months</td>
                  <td class="td">{{ refinanceLoanMonthsToPayOff }} months</td>
                </tr>
                <tr>
                  <td class="td"><b>Total Cost of Loan</b></td>
                  <td class="td">${{ currentLoanTotalCost.toFixed(2) }}</td>
                  <td class="td">${{ refinanceLoanTotalCost.toFixed(2) }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>




<script setup>
import { ref, onMounted } from "vue";
import NumberInput from "~/src/shared/components/NumberInput.vue";
import DefaultLayout from "~/src/shared/layout/DefaultLayout.vue";
import Dropdown from "~/src/shared/components/Dropdown.vue";
const totalBalance = ref(40000);
const numPaymentsLeft = ref(72);
const totalMonthlyPayment = ref(700);
const tenure = ref(10);
const refinanceInterestRate = ref(6.0);

const monthlyPayment = ref("");
const lifetimeSavings = ref("");
const currentLoanInterestRate = ref(7.932);
const refinanceLoanInterestRate = ref(6.0);
const currentLoanMonthlyPayment = ref(0);
const refinanceLoanMonthlyPayment = ref(0);
const currentLoanMonthsToPayOff = ref(0);
const refinanceLoanMonthsToPayOff = ref(0);
const currentLoanTotalCost = ref(0);
const refinanceLoanTotalCost = ref(0);
const dropdownOptions = ref([
  { value: 5, label: "5 Years" },
  { value: 10, label: "10 Years" },
]);
const showToolTip = ref(true);

const updateValue = (data) => {
  if (data.name === "totalBalance") {
    totalBalance.value = data.value;
  } else if (data.name === "numPaymentsLeft") {
    numPaymentsLeft.value = data.value;
  } else if (data.name === "totalMonthlyPayment") {
    totalMonthlyPayment.value = data.value;
  } else if (data.name === "refinanceInterestRate") {
    refinanceInterestRate.value = data.value;
  }
  calculateMonthlyPayment();
};
numPaymentsLeft;

const updateTenure = (newTenure) => {
  tenure.value = newTenure;
  calculateMonthlyPayment();
};

const calculateMonthlyPayment = () => {
  const totalBalanceValue = totalBalance.value;
  const numPaymentsLeftValue = numPaymentsLeft.value;
  const totalMonthlyPaymentValue = totalMonthlyPayment.value;
  const refinanceInterestRateValue = refinanceInterestRate.value;
  const tenureValue = tenure.value;

  const currentMonthlyPayment = totalBalanceValue / numPaymentsLeftValue;
  const refiMonthlyPayment =
    (totalBalanceValue +
      (refinanceInterestRateValue / 100) * totalBalanceValue) /
    (tenureValue * 12);

  const monthlySavings = currentMonthlyPayment - refiMonthlyPayment;

  monthlyPayment.value = monthlySavings.toFixed(2);
  const lifetimeSavingsValue = monthlySavings * numPaymentsLeftValue;
  lifetimeSavings.value = lifetimeSavingsValue.toFixed(2);

  currentLoanMonthlyPayment.value = currentMonthlyPayment;
  refinanceLoanMonthlyPayment.value = refiMonthlyPayment;
  currentLoanMonthsToPayOff.value = numPaymentsLeftValue;
  refinanceLoanMonthsToPayOff.value = tenureValue * 12;
  currentLoanTotalCost.value = totalMonthlyPaymentValue * numPaymentsLeftValue;
  refinanceLoanTotalCost.value = refiMonthlyPayment * (tenureValue * 12);
};

const redirectToLink = () => {
  window.location.href = "https://www.v2solutions.com/#";
};

onMounted(calculateMonthlyPayment);
</script>

<style scoped>
@import "@/apps/assets/style.css";
</style>
