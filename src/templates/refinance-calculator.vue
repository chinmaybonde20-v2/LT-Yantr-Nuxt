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

<script>
import DefaultLayout from '../shared/layout/DefaultLayout.vue';
import NumberInput from '../shared/components/NumberInput.vue';
import Dropdown from "../shared/components/Dropdown.vue";

export default {
  components: {
    NumberInput,
    Dropdown,
    DefaultLayout,
  },
  data() {
    return {
      currMortBalance: 250000,
      monthlyPayments: 1950,
      newIntRate: 6.00,
      tenure: 30,
      newMonthlyPayment: "",
      monthlySaving: "",
      dropdownOptions: [
        { value: 15, label: "15 Years" },
        { value: 30, label: "30 Years" },
      ],
    };
  },
  methods: {
    updateValue(name, value) {
      this[name] = value;
      this.calculateMonthlyPayment();
    },
    updateTenure(tenure) {
      this.tenure = tenure;
      this.calculateMonthlyPayment();
    },
    calculateMonthlyPayment() {
      // Your improved calculation logic here
      const currMortBalance = this.currMortBalance;
      const monthlyPayments = this.monthlyPayments;
      const newIntRate = this.newIntRate / 100;
      const tenureInMonths = this.tenure * 12;

      // Perform the calculation to get the new monthly payment
      const newMonthlyPayment =
        (currMortBalance * (newIntRate / 12)) /
        (1 - Math.pow(1 + newIntRate / 12, -tenureInMonths));

      // Calculate the monthly savings
      const monthlySaving = monthlyPayments - newMonthlyPayment;

      // Update the data properties
      this.newMonthlyPayment = newMonthlyPayment.toFixed(2);
      this.monthlySaving = monthlySaving.toFixed(2);
    },
  },
  created() {
    this.calculateMonthlyPayment();
  },
};
</script>

<style scoped>
@import "./debt-consodilation.css";
</style>
