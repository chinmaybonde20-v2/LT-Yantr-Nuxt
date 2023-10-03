<template>
  <div>
    <div class="inputs">
      <div class="input-group">
        <!-- Input 1 -->
        <NumberInput
          name="homePrice"
          label="Home Price:"
          type="number"
          :value="homePrice"
          @input-change="updateValue"
        />
      </div>

      <div class="input-group">
        <!-- Dropdown 1 -->
        <Dropdown label="Loan Term:" @tenure-change="updateTenure" />
      </div>

      <div class="input-group">
        <!-- Input 2 -->
        <NumberInput
          name="downPayment"
          label="Down Payment: "
          type="number"
          :value="downPayment"
          @input-change="updateValue"
        />
      </div>
      <div class="input-group">
        <!-- Input 2 -->
        <NumberInput
          name="intBox"
          label=""
          type="number"
          :value="intBox"
          @input-change="intBox"
        />
      </div>
      <!-- Date picker -->
      <div>
        <label for="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          v-model="startDate"
          @input="handleStartDateChange"
        />
      </div>
    </div><br><br>


    <div class="row">
      <div class="left-column">
        <div class="center-text">
          <h2>Your monthly payment will be:</h2><br><br>
          <h2>$1,914.67</h2><br><br>
        </div>
        <div class="row contain-2-cards">
          <!-- left card -->
          <div class="card">
            <div class="card-header">Total Interest Paid:</div>
            <div class="card-content">
              <h3>xyz</h3>
            </div>
          </div>
          <!-- right card -->
          <div class="card">
            <div class="card-header">Total Interest Paid:</div>
            <div class="card-content">
              <h3>xyz</h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Total Interest Paid:</div>
          <div class="card-content">
            <h3>xyz</h3>
          </div>
        </div><br><br>
        <div class="center-text">
          <h3>We've found offers for this result:</h3>
          <button class="get-offer-button">View Free Offers</button><br><br>
          <h6>Disclosures</h6>
        </div>
      </div>
      <div class="right-column">
        <h2>Monthly payment breakdown</h2><br><br>
        <h1>PIE CHART</h1>
      </div>
    </div>

    <!--  -->
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
      homePrice: 40000,
      downPayment: 72,
      totalMonthlyPayment: 700,
      tenure: 10, // Refinance Rate Term (in years)
      refinanceInterestRate: 6.0, // Refinance Interest Rate
      monthlyPayment: "",
      currentLoanInterestRate: 7.932, // Current Loan Interest Rate (for demo)
      refinanceLoanInterestRate: 6.0, // Refinanced Loan Interest Rate (for demo)
      currentLoanMonthlyPayment: 700, // Current Loan Monthly Payment (for demo)
      refinanceLoanMonthlyPayment: 444.08, // Refinanced Loan Monthly Payment (for demo)
      currentLoanMonthsToPayOff: 72, // Current Loan Months to Pay Off (for demo)
      refinanceLoanMonthsToPayOff: 120, // Refinanced Loan Months to Pay Off (for demo)
      currentLoanTotalCost: 50400, // Current Loan Total Cost (for demo)
      refinanceLoanTotalCost: 53289.84, // Refinanced Loan Total Cost (for demo)
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
      const homePrice = parseFloat(this.homePrice);
      const downPayment = parseFloat(this.downPayment);
      const totalMonthlyPayment = parseFloat(this.totalMonthlyPayment);
      const refinanceInterestRate = parseFloat(this.refinanceInterestRate);
      const tenure = parseFloat(this.tenure);

      // Calculate the monthly payment for the current loans
      const currentMonthlyPayment = homePrice / downPayment;

      // Calculate the monthly payment for the refinanced loan
      const refiMonthlyPayment =
        (homePrice + (refinanceInterestRate / 100) * homePrice) / (tenure * 12);

      // Calculate the estimated monthly savings
      const monthlySavings = currentMonthlyPayment - refiMonthlyPayment;

      // Display the estimated monthly savings
      this.monthlyPayment = monthlySavings.toFixed(2);

      // Calculate and display lifetime savings
      const lifetimeSavings = monthlySavings * downPayment;
      this.lifetimeSavings = lifetimeSavings.toFixed(2);

      // Calculate and display table values
      this.currentLoanInterestRate = 7.932;
      this.refinanceLoanInterestRate = refinanceInterestRate;
      this.currentLoanMonthlyPayment = currentMonthlyPayment;
      this.refinanceLoanMonthlyPayment = refiMonthlyPayment;
      this.currentLoanMonthsToPayOff = downPayment;
      this.refinanceLoanMonthsToPayOff = tenure * 12;
      this.currentLoanTotalCost = totalMonthlyPayment * downPayment;
      this.refinanceLoanTotalCost = refiMonthlyPayment * (tenure * 12);
    },
  },
  created() {
    this.calculateMonthlyPayment();
  },
};
</script>

<style scoped>
@import "./mortgage-payment-calculator.css";
</style>
