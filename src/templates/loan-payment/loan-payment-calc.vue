<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <div class="input-group">
              <NumberInput
                name="amount"
                label="Loan Amount"
                type="number"
                :value="amount"
                @input-change="updateValue"
              />
            </div>
            <div class="input-group">
              <NumberInput
                name="interest"
                label="Loan Interest"
                type="number"
                :value="interest"
                @input-change="updateValue"
              />
            </div>
            <div class="input-group">
              <Dropdown @tenure-change="updateTenure" />
            </div>
          </div>
        </div>
      </template>


      <template v-slot:rightColumn>
        <div class="right-column">
          <div class="amount">
            <h1>{{ monthlyPayment }}</h1>
          </div>

          <h3>Ready for the next step?</h3>
          <button class="get-offer-button">Get Free Loan Offer</button>
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
      amount: 10000,
      interest: 8,
      tenure: 12,
      monthlyPayment: "",
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
      const principal = parseFloat(this.amount);
      const annualInterest = parseFloat(this.interest) / 100;
      const monthlyInterest = annualInterest / 12;
      const numberOfPayments = this.tenure;

      if (
        isNaN(principal) ||
        isNaN(annualInterest) ||
        isNaN(numberOfPayments)
      ) {
        this.monthlyPayment = "Invalid input";
      } else {
        const numerator =
          principal *
          monthlyInterest *
          Math.pow(1 + monthlyInterest, numberOfPayments);
        const denominator = Math.pow(1 + monthlyInterest, numberOfPayments) - 1;
        const monthlyPayment = (numerator / denominator).toFixed(2);
        this.monthlyPayment = `Monthly Payment: $${monthlyPayment}`;
      }
    },
  },
  created() {
    this.calculateMonthlyPayment();
  },
};
</script>

<style scoped>
@import "./loan-payment-calc.css";
</style>
