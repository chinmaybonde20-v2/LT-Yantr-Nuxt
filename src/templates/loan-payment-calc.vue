<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
          <div class="input">
            <NumberInput
              name="amount"
              label="Loan Amount"
              type="number"
              :value="amount"
              @input-change="updateValue"
              :showToolTip="showToolTip"
            />
          </div>
          <div class="input">
            <NumberInput
              name="interest"
              label="Loan Interest"
              type="number"
              :value="interest"
              @input-change="updateValue"
              :showToolTip="showToolTip"
            />
          </div>
          <div class="input">
            <Dropdown
              label="Loan Tenure"
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
          <div class="amount">
            <p id="p1">Your monthly payment will be:</p>
            <h1>${{ monthlyPayment }}</h1>
            <p id="p2">Ready for the next step?</p>
          </div>
          <button class="get-offer-button" @click="redirectToLink">
            Get Free Loan Offer
          </button>
        </div>
      </template>
    </DefaultLayout>
  </div>
</template>


<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import NumberInput from "../shared/components/NumberInput.vue";
import Dropdown from "../shared/components/Dropdown.vue";
import DefaultLayout from "../shared/layout/DefaultLayout.vue";
import payment from "../shared/helpers/payment.js";

const amount = ref(50000);
const interest = ref(0.001);
const tenure = ref(30);
const monthlyPayment = ref("");
const dropdownOptions = ref([
  { value: 1, label: "1 Year" },
  { value: 2, label: "2 Years" },
  { value: 3, label: "3 Years" },
  { value: 4, label: "4 Years" },
  { value: 5, label: "5 Years" },
  { value: 10, label: "10 Years" },
  { value: 15, label: "15 Years" },
  { value: 20, label: "20 Years" },
  { value: 25, label: "25 Years" },
  { value: 30, label: "30 Years" },
  { value: 40, label: "40 Years" },
]);
const showToolTip = ref(true);
const updateValue = (name, value) => {
  if (name === "amount") {
    amount.value = value;
  } else if (name === "interest") {
    interest.value = value;
  }
};

const updateTenure = (newTenure) => {
  tenure.value = newTenure;
};

const calculateMonthlyPayment = () => {
  const result = payment.calculateMonthlyPayment(
    amount.value,
    interest.value,
    tenure.value
  );
  monthlyPayment.value = result;
};
const redirectToLink = () => {
  window.location.href = "https://www.v2solutions.com/#";
};

watch([amount, interest, tenure], calculateMonthlyPayment);

onMounted(calculateMonthlyPayment);
</script>

<style scoped>
@import "../../apps/assets/style.css";
</style>