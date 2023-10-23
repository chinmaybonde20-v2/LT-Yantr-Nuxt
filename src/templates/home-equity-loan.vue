<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="input-box">
            <div class="input">
              <NumberInput
                name="currAprValue"
                label="Current Appraised Value of Home:"
                type="number"
                :value="currAprValue"
                @input="updateValue('currAprValue', $event)"
                :showToolTip="showToolTip"
              />
            </div>
            <div class="input">
              <NumberInput
                name="oweAmount"
                label="How Much Do You Owe on Home:"
                type="number"
                :value="oweAmount"
                @input="updateValue('oweAmount', $event)"
                :showToolTip="showToolTip"
              />
            </div>
            <div class="input">
              <Dropdown
                label="Current Credit Score:"
                :options="creditScoreOptions"
                :selectedOption="tenure"
                @change="updateTenure"
                :showToolTip="showToolTip"
              />
            </div><br>
           <p id="p1" > <a href="https://www.v2solutions.com/#" class="home-eq">Estimate your home's current value</a></p>
          </div>
      
      </template>

      <template v-slot:rightColumn>
        <div class="output">
          <p id="p1">You can get a home equity loan or HELOC for:</p>
          <h1>${{ homeEquityLoan }}</h1>

          <button class="get-offer-button" @click="redirectToOffer">
            Access Your Equity
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

const currAprValue = ref(225000);
const oweAmount = ref(165000);
const tenure = ref("excellent");
const creditScoreOptions = ref([
  { value: "excellent", label: "740+ (Excellent)" },
  { value: "good", label: "680-739 (Good)" },
  { value: "fair", label: "620-679 (Fair)" },
  { value: "poor", label: "< 620 (Poor)" },
]);
const showToolTip = ref(true);
const homeEquityLoan = ref("");

const updateValue = (name, value) => {
  if (name === "currAprValue") {
    currAprValue.value = value;
  } else if (name === "oweAmount") {
    oweAmount.value = value;
  }
};

const updateTenure = (newTenure) => {
  tenure.value = newTenure;
};

const calculateHomeEquityLoan = () => {
  const LoanToValueRatio = 0.85; 
  homeEquityLoan.value = Math.round((LoanToValueRatio * currAprValue.value) - oweAmount.value);
};

const redirectToOffer = () => {
  window.location.href = "https://www.v2solutions.com/#";
};

watch([currAprValue, oweAmount, tenure], calculateHomeEquityLoan);

onMounted(calculateHomeEquityLoan);
</script>

<style scoped>
@import "../../apps/assets/style.css";
</style>
