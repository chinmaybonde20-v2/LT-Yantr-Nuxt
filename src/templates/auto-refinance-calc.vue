<template>
  <div class="container">
    <div class="inputs">
      <div>
        <b>
          <p>Current Loan:</p>
        </b>
        <div class="row">
          <div>
            <NumberInput
              name="currentBalance"
              label="Current Balance:"
              type="number"
              :value="currentBalance"
              @input-change="updateValue"
              :showToolTip="showToolTip"
            />
            
          </div>
          <div>
            <NumberInput
              name="monthlyPayment"
              label="Monthly Payment:"
              type="number"
              :value="monthlyPayment"
              @input-change="updateValue"
            />
          </div>
          <div>
            <NumberInput
              name="interestRateOld"
              label="Interest Rate:"
              type="number"
              :value="interestRateOld"
              @input-change="updateValue"
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <b>
          <p>Refinance Loan:</p>
        </b>
        <div class="row">
          <div>
            <NumberInput
              name="loanAmount"
              label="Loan Amount:"
              type="number"
              :value="loanAmount"
              @input-change="updateValue"
            />
          </div>
          <div>
            <Dropdown
              label="Loan Term:"
              :options="dropdownOptions"
              :selectedOption="tenure"
              @tenure-change="updateTenure"
              :showToolTip="showToolTip"
            />
          </div>
          <div>
            <NumberInput
              name="interestRateNew"
              label="Interest Rate:"
              type="number"
              :value="interestRateNew"
              @input-change="updateValue"
            />
          </div>
        </div>
      </div>
      <br />
    </div>
    <div class="output">
      <br />
      <h2>Refinancing results</h2>
      <h3>Your estimated savings over the life of the loan</h3>
      <h1>${{ estimatedSavings.toFixed(2) }}</h1>



      <button class="get-offer-button" onclick="window.location.href = 'https:&#47;&#47;www.lendingtree.com/?sessionid=d542b553-e19d-4699-bb89-ca3708f5b031&mta=1'">See Refinance Offers</button>
      <br /><br />
    </div>
    <div class="row card-div">
      <div class="card">
        <div class="card-header">REMAINING MONTHS</div>
        <div class="card-content">
          <div class="row">
            <div class="left">650</div>
            <div class="vs"><h3>vs</h3></div>
            <div class="right">643</div>
          </div>
          <p style="width: 100%">
            Refinancing Increases your monthly payments by $14
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">REMAINING MONTHS</div>
        <div class="card-content">
          <div class="row">
            <div class="left">650</div>
            <div class="vs"><h3>vs</h3></div>
            <div class="right">643</div>
          </div>
          <p style="width: 100%">
            Refinancing Increases your monthly payments by $14
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">REMAINING MONTHS</div>
        <div class="card-content">
          <div class="row">
            <div class="left">650</div>
            <div class="vs"><h3>vs</h3></div>
            <div class="right">643</div>
          </div>
          <p style="width: 100%">
            Refinancing Increases your monthly payments by $14
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from "vue";
import payment from "~/src/shared/helpers/payment.js";
import NumberInput from "../shared/components/NumberInput.vue";
import Dropdown from "../shared/components/Dropdown.vue";
// Define your data properties for inputs
const currentBalance = ref(45000);
const monthlyPayment = ref(650);
const interestRateOld = ref(3.99);

// Declare 'tenure' as a simple ref without 'const' to avoid redeclaration
const tenure = ref(6);

const interestRateNew = ref(1.99);
const loanAmount = ref(45000);
const dropdownOptions = ref([
  { value: 7, label: "7 Year" },
  { value: 6, label: "6 Years" },
  { value: 5, label: "5 Years" },
  { value: 4, label: "4 Years" },
  { value: 3, label: "3 Years" },
  { value: 2, label: "2 Years" },
]);
const showToolTip = ref(true);
// Define a computed property for the remaining months (N) based on the selected tenure
const remainingMonths = computed(() => tenure.value * 12);

// Define a computed property for the monthly interest rate (r) based on the annual interest rate
const monthlyInterestRateOld = computed(() => interestRateOld.value / 12 / 100);
const monthlyInterestRateNew = computed(() => interestRateNew.value / 12 / 100);

// Define computed properties for remaining interest (I) for old and new loans
const remainingInterestOld = computed(() => {
  return (
    currentBalance.value *
    ((1 - Math.pow(1 + monthlyInterestRateOld.value, -remainingMonths.value)) /
      monthlyInterestRateOld.value)
  );
});
const remainingInterestNew = computed(() => {
  return (
    loanAmount.value *
    ((1 - Math.pow(1 + monthlyInterestRateNew.value, -remainingMonths.value)) /
      monthlyInterestRateNew.value)
  );
});

// Calculate the estimated savings (S) by subtracting remaining interest of the new loan from the old loan
const estimatedSavings = computed(
  () => remainingInterestOld.value - remainingInterestNew.value
);

// Function to update the data properties when inputs change
const updateValue = (name, value) => {
  // Update the respective ref property
  if (name === "currentBalance") currentBalance.value = value;
  else if (name === "monthlyPayment") monthlyPayment.value = value;
  else if (name === "interestRateOld") interestRateOld.value = value;
  else if (name === "loanAmount") loanAmount.value = value;
  else if (name === "interestRateNew") interestRateNew.value = value;

  // Call the function to recalculate estimated savings
  calculateEstimatedSavings();
};

// Function to update the tenure
const updateTenure = (newTenure) => {
  tenure.value = newTenure;
};

// Calculate the initial estimated savings
onMounted(() => {
  calculateEstimatedSavings();
});

// Function to recalculate the estimated savings
const calculateEstimatedSavings = () => {
  // Recalculate the estimated savings (S)
  estimatedSavings.value =
    remainingInterestOld.value - remainingInterestNew.value;
};

</script>

  
  <style scoped>
/* Container for the entire component */
.container {
  padding: 10px;

  margin: 0 40px 0 40px;
}

/* Styles for the input section */
.inputs {
  background-color: #f1f3f3;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.row {
  display: flex;
  justify-content: space-between;
}

.left {
  padding: 10px;
}
.right {
  padding: 10px;
}

p {
  width: 20%; /* Adjust as needed */
  font-weight: bold;
}

/* Styles for the output section */
.output {
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #08c177;
  font-size: 60px;
  font-weight: bold;
  line-height: 60px;
}

.get-offer-button {
  padding: 10px;
  width: 350px;
  font-size: 20px;
  background-color: #00aeef;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

/* Styles for the cards section */
.card {
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 48%; /* Adjust the width as needed */
  margin-bottom: 20px;
  margin: 10px;
}

.card-header {
  background-color: #f1f3f3;
  padding: 10px;
}

.card-content {
  padding: 10px;
}

.card-header {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}

.card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

/* Styles for the remaining months cards */
.card-col {
  width: 50%;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}

.card-col.left {
  border-right: none;
}

.card-col.right {
  border-left: none;
}

.vs {
  margin: 0 40px 0 40px;
}
</style>
  