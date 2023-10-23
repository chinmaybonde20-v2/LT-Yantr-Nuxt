<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <!-- Input 1 -->
          <div class="input">
            <NumberInput
              name="totalLoanAmount"
              label="Total Loan Amount"
              type="number"
              :value="totalLoanAmount"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 2 d-->
          <div class="input">
            <NumberInput
              name="termInMonths"
              label="Term (Months):"
              type="number"
              :value="termInMonths"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 3 -->
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
            <h1>${{ autoPayment }}</h1>
            <div class="row">
              <div class="column">
                <div class="cards">
                  <div class="cards-header">Loan Amount:</div>
                  <div class="card-content">
                    <h3>${{ totalLoanAmount }}</h3>
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
<script>
import NumberInput from "../shared/components/NumberInput.vue";
import DefaultLayout from "../shared/layout/DefaultLayout.vue";
import { calculateAutoPayment } from "../shared/helpers/payment.js";

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
    redirectToLink() {
      window.location.href = "https://www.v2solutions.com/#";
    },
  },

  created() {
    this.calculateAutoPayment();
  },
};
</script>



<style scoped>
@import "../../apps/assets/style.css";
</style>
