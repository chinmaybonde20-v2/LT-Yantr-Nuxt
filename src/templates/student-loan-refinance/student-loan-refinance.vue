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
                @tenure-change="updateTenure"
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
            <button class="get-offer-button">View Free Loan Offers</button>
          </div><hr>
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
                            <td>{{ currentInterestRate }}</td>
                            <td>{{ displayNewInterestRateUsedForCalc }}</td>
                        </tr>
                        <tr>
                            <td><b>Monthly Payment</b></td>
                            <td>{{ displayCurrentMonthlyPayment }}</td>
                            <td>{{ displayMonthlyPayment }}</td>
                        </tr>
                        <tr>
                            <td><b>Months to Pay Off</b></td>
                            <td>{{ NoOfMonthlyPaymentLeft }} months</td>
                            <td>{{ noOfMonthsPaymentForRefiLoan }} months</td>
                        </tr>
                        <tr>
                            <td><b>Total Cost of Loan</b></td>
                            <td>{{ displayCurrentLoanLifeTimePayment }}</td>
                            <td>{{ displayRefiLoanLifeTimePayment }}</td>
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
      totalBalance: 10000,
      numPaymentsLeft: 3,
      totalMonthlyPayment: 5000,
      tenure: 12,
      refinanceInterestRate: 10,
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
      const totalBalance = parseFloat(this.totalBalance);
      const numPaymentsLeft = parseFloat(this.numPaymentsLeft);
      const totalMonthlyPayment = parseFloat(this.totalMonthlyPayment);
      const refinanceInterestRate = parseFloat(this.refinanceInterestRate);
      const tenure = parseFloat(this.tenure);

      const monthlyPayment =
        totalBalance +
        numPaymentsLeft +
        totalMonthlyPayment +
        refinanceInterestRate +
        tenure;

      this.monthlyPayment = monthlyPayment.toFixed(2);
      this.lifetimeSavings = this.monthlyPayment - 1;
    },
  },
  created() {
    this.calculateMonthlyPayment();
  },
};
</script>

<style scoped>
@import "./student-loan-refinance.css";
</style>
