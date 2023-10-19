<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <!-- Input 1 -->
            <div class="input-group">
              <NumberInput
                name="totalBalance"
                label="Total Balance of All Loans"
                type="number"
                :value="totalBalance"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 2 -->
            <div class="input-group">
              <NumberInput
                name="numPaymentsLeft"
                label="Number of Monthly Payments Left on Loans"
                type="number"
                :value="numPaymentsLeft"
                @input-change="updateValue"
              />
            </div>
            <!-- Input 3 -->
            <div class="input-group">
              <NumberInput
                name="totalMonthlyPayment"
                label="Total Monthly Payment"
                type="number"
                :value="totalMonthlyPayment"
                @input-change="updateValue"
              />
            </div>
            <!-- Dropdown 1 -->
            
            <div class="input-group">

              <Dropdown
                label="Refinance Rate Term:"
                :options="dropdownOptions"
                :selectedOption="tenure"
                @tenure-change="updateTenure"
                :showToolTip="showToolTip"
              />
            </div>
            <!-- Input 4 -->
            <div class="input-group">
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
        </div>
      </template>

      <template v-slot:rightColumn>
        <div>
          <h1>Your estimated monthly savings would be:</h1>
          <div class="right-column">
            <div class="amount">
              <h1>{{ monthlyPayment }}</h1>
            </div>

            <h3>Lifetime Savings: {{ lifetimeSavings }}</h3>
            
            <button class="get-offer-button" onclick="window.location.href = 'https:&#47;&#47;www.lendingtree.com/student/refinance/'">View Free Loan Offers</button>


          </div>
          <hr />
          <!-- Table -->
          <div class="mb-mt">
            <h4>Student loan refinance breakdown</h4>
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <tr>
                  <th></th>
                  <th><b>Current Loan</b></th>
                  <th><b>Refinanced Loan</b></th>
                </tr>
                <tr>
                  <td><b>Interest Rate</b></td>
                  <td>{{ currentLoanInterestRate.toFixed(2) }} %</td>
                  <td>{{ refinanceLoanInterestRate.toFixed(2) }} %</td>
                </tr>
                <tr>
                  <td><b>Monthly Payment</b></td>
                  <td>${{ currentLoanMonthlyPayment.toFixed(2) }}</td>
                  <td>${{ refinanceLoanMonthlyPayment.toFixed(2) }}</td>
                </tr>
                <tr>
                  <td><b>Months to Pay Off</b></td>
                  <td>{{ currentLoanMonthsToPayOff }} months</td>
                  <td>{{ refinanceLoanMonthsToPayOff }} months</td>
                </tr>
                <tr>
                  <td><b>Total Cost of Loan</b></td>
                  <td>${{ currentLoanTotalCost.toFixed(2) }}</td>
                  <td>${{ refinanceLoanTotalCost.toFixed(2) }}</td>
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
      showToolTip : true
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
  },
  created() {
    this.calculateMonthlyPayment();
  },
};
</script>

<style scoped>
@import "../../apps/assets/student-loan-refinance.css";
</style>
