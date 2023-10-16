<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <!-- Input 1 -->
            <div class="input-group">
              <NumberInput
                name="totalLoanAmount"
                label="Total Loan Amount"
                type="number"
                :value="totalLoanAmount"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 2 d-->
            <div class="input-group">
              <NumberInput
                name="termInMonths"
                label="Term (Months):"
                type="number"
                :value="termInMonths"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 3 -->
            <div class="input-group">
              <NumberInput
                name="interestRate"
                label="Interest Rate (%):"
                type="number"
                :value="interestRate"
                @input-change="updateValue"
              />
            </div>
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <h2>Your estimated auto payment will be:</h2>
          <div class="right-column">
            <div class="amount">
              <h1>${{ autoPayment }}</h1>
            </div>
            <div class="row">
              <div class="column">
                <div class="card">
                  <div class="card-header">Loan Amount:</div>
                  <div class="card-content">
                    <h3>${{ totalLoanAmount }}</h3>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="card-header">Term (Months):</div>
                  <div class="card-content">
                    <h3>{{ termInMonths }}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="disc">
              <h3>We've found offers for this result:</h3>
              <button class="get-offer-button">Compare Loan Offers</button>
              <p>Disclosures</p>
            </div>
          </div>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>
<script>
import NumberInput from "../../shared/components/NumberInput.vue";
import DefaultLayout from "../../shared/layout/DefaultLayout.vue";
import { calculateAutoPayment } from "../../shared/helpers/payment.js";

export default {
  components: {
    NumberInput,
    DefaultLayout,
  },
  data() {
    return {
      totalLoanAmount: 25000,
      interestRate: 2.5,
      termInMonths: 48,
      autoPayment: "",
    };
  },
  methods: {
    updateValue(name, value) {
      this[name] = value;
      this.calculateAutoPayment();
    },
    calculateAutoPayment() {
      this.autoPayment = calculateAutoPayment(
        this.totalLoanAmount,
        this.interestRate,
        this.termInMonths
      );
    },
  },
  created() {
    this.calculateAutoPayment();
  },
};
</script>



<style scoped>
@import "./auto-loan-lite.css";
</style>
