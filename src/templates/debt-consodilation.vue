<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <!-- Input 1 -->
          <div class="input">
            <NumberInput
              name="loanBalance"
              label="Loan Balance:"
              type="number"
              :value="loanBalance"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 2 -->
          <div class="input">
            <NumberInput
              name="monthlyPayments"
              label="Monthly Payment:"
              type="number"
              :value="monthlyPayments"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 3 -->
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
          <!-- Dropdown 4 -->
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
<script>
import NumberInput from "../shared/components/NumberInput.vue";
import Dropdown from "../shared/components/Dropdown.vue";
import DefaultLayout from "../shared/layout/DefaultLayout.vue";

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
      showToolTip: true,
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
    redirectToLink() {
      window.location.href = "https://www.v2solutions.com/#";
    },
  },
  created() {
    this.calculateMonthlyPayment();
  },
};
</script>


<style scoped>
@import "../../apps/assets/debt-consodilation.css";
@import "../../apps/assets/style.css";
</style>