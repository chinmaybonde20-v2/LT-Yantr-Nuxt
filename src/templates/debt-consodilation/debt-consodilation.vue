<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <!-- Input 1 -->
            <div class="input-group">
              <NumberInput
                name="loanBalance"
                label="Loan Balance:"
                type="number"
                :value="loanBalance"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 2 -->
            <div class="input-group">
              <NumberInput
                name="monthlyPayments"
                label="Monthly Payment:"
                type="number"
                :value="monthlyPayments"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 3 -->
            <div class="input-group">
              <NumberInput
                name="consoLoanRate"
                label="Consolidation Loan Rate: "
                type="number"
                :value="consoLoanRate"
                @input-change="updateValue"
              />
            </div>
            <!-- Dropdown 4 -->
            <div class="input-group">
              <Dropdown label="Loan Term:" @tenure-change="updateTenure" />
            </div>
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
  <div class="flex-container">
    <h3 class="left-text">Consolidation loan amount:</h3>
    <h3 class="right-text">${{ loanBalance }}</h3>
  </div>
  <div class="flex-container">
    <h3 class="left-text">New Monthly Payment:</h3>
    <h3 class="right-text txt-color">${{newMonthlyPayment}}</h3>
  </div>
  <hr />
  <div class="flex-container">
    <h3 class="left-text">Your Monthly Savings Would Be:</h3>
    <h3 class="right-text txt-color-sav">${{monthlySaving}}</h3>
  </div>
  <button class="get-offer-button">Find Your Best Terms</button>
</div>

      </template>
    </DefaultLayout>
  </div>
</template>
<script>
import NumberInput from "../../shared/components/NumberInput.vue";
import Dropdown from "../../shared/components/Dropdown.vue";
import DefaultLayout from "../../shared/layout/DefaultLayout.vue";

export default {
  components: {
    NumberInput,
    Dropdown,
    DefaultLayout,
  },
  data() {
    return {
      loanBalance: 25000,
      monthlyPayments: 1000,
      consoLoanRate: 7.99,
      tenure: 12, 
      newMonthlyPayment: "",
      monthlySaving: "",
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
    // Constants for loan details
    const loanBalance = this.loanBalance;
    const monthlyPayments = this.monthlyPayments;
    const consoLoanRate = this.consoLoanRate / 100; // Convert percentage to decimal
    const tenureInMonths = this.tenure * 12;

    // Calculate the new monthly payment
    const newMonthlyPayment =
      (loanBalance * (consoLoanRate / 12)) /
      (1 - Math.pow(1 + consoLoanRate / 12, -tenureInMonths));

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
