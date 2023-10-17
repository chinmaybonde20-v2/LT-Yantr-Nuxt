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
              <Dropdown
                label="Loan Term"
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
          <div class="flex-container">
            <p class="left-text">Consolidation loan amount:</p>
            <h2 class="right-text">${{ loanBalance }}</h2>
          </div>
          <div class="flex-container">
            <p class="left-text">New Monthly Payment:</p>
            <h3 class="right-text txt-color">${{ newMonthlyPayment }}</h3>
          </div>
          <hr />
          <div class="flex-container">
            <p class="left-text">Your Monthly Savings Would Be:</p>
            <h2 class="right-text txt-color-sav">${{ monthlySaving }}</h2>
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
      tenure: 5,
      newMonthlyPayment: "",
      monthlySaving: "",
      dropdownOptions: [
        { value: 1, label: "1 Year" },
        { value: 2, label: "2 Years" },
        { value: 3, label: "3 Years" },
        { value: 4, label: "4 Years" },
        { value: 5, label: "5 Years" },
        { value: 6, label: "6 Years" },
        { value: 7, label: "7 Years" },
        { value: 8, label: "8 Years" },
        { value: 9, label: "9 Years" },
        { value: 10, label: "10 Years" },
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
     
      const loanBalance = this.loanBalance;
      const monthlyPayments = this.monthlyPayments;
      const consoLoanRate = this.consoLoanRate / 100; 
      const tenureInMonths = this.tenure * 12;

    
      const newMonthlyPayment =
        (loanBalance * (consoLoanRate / 12)) /
        (1 - Math.pow(1 + consoLoanRate / 12, -tenureInMonths));

 
      const monthlySaving = monthlyPayments - newMonthlyPayment;

     
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