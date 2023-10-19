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
                :showToolTip="showToolTip"
              />
            </div>
            <!-- Dropdown 4 -->
            <div class="input-group">
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
            <p class="left-text">Refinancing {{ monthlySaving >= 0 ? 'Decreases' : 'Increases' }} your monthly payment by</p>
            <h2 class="right-text txt-color-sav">${{ monthlySaving }}</h2>
          </div>
          <button class="get-offer-button" onclick="window.location.href = 'https:&#47;&#47;www.lendingtree.com/forms/mortgage/pecan/refi_sldr_pg?loan-type=refinance&rcode=10000&abandon=false&icode=28550&SpId=wp-refinance&esourceid=6131666&cchannel=seo&cepage=%2fyantr%2fapps%2finflation.html&sessionid=d542b553-e19d-4699-bb89-ca3708f5b031&mta=1'">Compare Refinance Offers</button>
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
const showToolTip = ref(true);

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
