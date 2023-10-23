<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <!-- Input 1 -->
          <div class="input">
            <NumberInput
              name="totalBalance"
              label="Total Balance of All Loans"
              type="number"
              :value="totalBalance"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 2 -->
          <div class="input">
            <NumberInput
              name="numPaymentsLeft"
              label="Number of Monthly Payments Left on Loans"
              type="number"
              :value="numPaymentsLeft"
              @input-change="updateValue"
            />
          </div>
          <!-- Input 3 -->
          <div class="input">
            <NumberInput
              name="totalMonthlyPayment"
              label="Total Monthly Payment"
              type="number"
              :value="totalMonthlyPayment"
              @input-change="updateValue"
            />
          </div>
          <!-- Dropdown 1 -->

          <div class="input">
            <Dropdown
              label="Refinance Rate Term:"
              :options="dropdownOptions"
              :selectedOption="tenure"
              @tenure-change="updateTenure"
              :showToolTip="showToolTip"
            />
          </div>
          <!-- Input 4 -->
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
            <hr>
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
                  <td class="td">{{ refinanceLoanInterestRate.toFixed(2) }} %</td>
                </tr>
                <tr>
                  <td class="td"><b>Monthly Payment</b></td>
                  <td class="td">${{ currentLoanMonthlyPayment.toFixed(2) }}</td>
                  <td class="td">${{ refinanceLoanMonthlyPayment.toFixed(2) }}</td>
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
      totalBalance: 40000,
      numPaymentsLeft: 72,
      totalMonthlyPayment: 700,
      tenure: 10,
      refinanceInterestRate: 6.0,
      monthlyPayment: "",
      currentLoanInterestRate: 7.932,
      refinanceLoanInterestRate: 6.0,
      currentLoanMonthlyPayment: 700,
      refinanceLoanMonthlyPayment: 444.08,
      currentLoanMonthsToPayOff: 72,
      refinanceLoanMonthsToPayOff: 120,
      currentLoanTotalCost: 50400,
      refinanceLoanTotalCost: 53289.84,
      dropdownOptions: [
        { value: 5, label: "5 Years" },
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
      // Convert input values to numbers
      const totalBalance = parseFloat(this.totalBalance);
      const numPaymentsLeft = parseFloat(this.numPaymentsLeft);
      const totalMonthlyPayment = parseFloat(this.totalMonthlyPayment);
      const refinanceInterestRate = parseFloat(this.refinanceInterestRate);
      const tenure = parseFloat(this.tenure);

      // Calculate the monthly payment for the current loans
      const currentMonthlyPayment = totalBalance / numPaymentsLeft;

      // Calculate the monthly payment for the refinanced loan
      const refiMonthlyPayment =
        (totalBalance + (refinanceInterestRate / 100) * totalBalance) /
        (tenure * 12);

      // Calculate the estimated monthly savings
      const monthlySavings = currentMonthlyPayment - refiMonthlyPayment;

      // Display the estimated monthly savings
      this.monthlyPayment = monthlySavings.toFixed(2);

      // Calculate and display lifetime savings
      const lifetimeSavings = monthlySavings * numPaymentsLeft;
      this.lifetimeSavings = lifetimeSavings.toFixed(2);

      // Calculate and display table values
      this.currentLoanInterestRate = 7.932;
      this.refinanceLoanInterestRate = refinanceInterestRate;
      this.currentLoanMonthlyPayment = currentMonthlyPayment;
      this.refinanceLoanMonthlyPayment = refiMonthlyPayment;
      this.currentLoanMonthsToPayOff = numPaymentsLeft;
      this.refinanceLoanMonthsToPayOff = tenure * 12;
      this.currentLoanTotalCost = totalMonthlyPayment * numPaymentsLeft;
      this.refinanceLoanTotalCost = refiMonthlyPayment * (tenure * 12);
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
@import "../../apps/assets/style.css";
</style>
