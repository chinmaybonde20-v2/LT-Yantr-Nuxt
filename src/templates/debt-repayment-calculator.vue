<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <!-- Input 1 -->
          <div class="input">
            <NumberInput
              name="loanBalance"
              label="Balance:"
              type="number"
              :value="loanBalance"
              @input-change="updateValue('loanBalance', $event)"
            />
          </div>
          <!-- Input 2 -->
          <div class="input">
            <NumberInput
              name="interestRate"
              label="Interest Rate:"
              type="number"
              :value="interestRate"
              @input-change="updateValue('interestRate', $event)"
            />
          </div>
          <!-- Input 3 -->
          <div class="input">
            <NumberInput
              name="monthlyPayment"
              label="Monthly Payment:"
              type="number"
              :value="monthlyPayment"
              @input-change="updateValue('monthlyPayment', $event)"
            />
            <p>OR</p>
          </div>

          <!-- Input 4 -->
          <div class="input">
            <NumberInput
              name="payoffTimeframe"
              label="Payoff Timeframe:"
              type="number"
              :value="payoffTimeframe"
              @input-change="updateValue('payoffTimeframe', $event)"
            />
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <table class="custom-table">
            <tr>
              <td>
                <p class="table-flex">You would pay off your debt in:</p>
              </td>
              <td>
                <p id="p3">{{ payOffDebts }} months</p>
              </td>
            </tr>
            <hr>
            <tr>
              <td>
                <p class="table-flex">Your monthly payment would be:</p>
              </td>
              <td>
                <p id="p3">${{ monthlyPayment }}</p>
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
<script>
import NumberInput from "../shared/components/NumberInput.vue";
import DefaultLayout from "../shared/layout/DefaultLayout.vue";

export default {
  components: {
    NumberInput,
    DefaultLayout,
  },
  data() {
    return {
      loanBalance: 9000,
      interestRate: 8.0,
      monthlyPayment: 125.0,
      payoffTimeframe: 0,
      newMonthlyPayment: null,
      payOffDebts: 98,
    };
  },
  methods: {
    updateValue(name, value) {
      // Parse input values as floats
      this[name] = parseFloat(value);
      this.calculateValues();
    },
    calculateValues() {
      const r = this.interestRate / 100 / 12;
      const L = this.loanBalance;
      const P = this.monthlyPayment;

      if (this.payoffTimeframe === 0) {
        // Calculate the number of months to pay off the debt
        const n = -(Math.log(1 - (r * P) / L) / Math.log(1 + r));
        this.payOffDebt = Math.round(n);
        // console.log("payOffDebt",payOffDebt.value);
      } else {
        this.payOffDebt = this.payoffTimeframe;
        // console.log("payOffDebt",payOffDebt.value);
      }

      if (this.monthlyPayment === 0) {
        // Calculate the monthly payment
        const n = this.payOffDebt;
        this.newMonthlyPayment = (
          (L * (r * Math.pow(1 + r, n))) /
          (Math.pow(1 + r, n) - 1)
        ).toFixed(2);
      } else {
        this.newMonthlyPayment = this.monthlyPayment;
      }
    },
    redirectToLink() {
      window.location.href = "https://www.v2solutions.com/#";
    },
  },
  created() {
    this.calculateValues();
  },
};
</script>
<style scoped>
@import "../../apps/assets/debt-consodilation.css";
@import "../../apps/assets/style.css";
</style>
