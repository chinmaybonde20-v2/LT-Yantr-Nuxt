<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <div class="input-group">
              <NumberInput
                name="currAprValue"
                label="Current Appraised Value of Home:"
                type="number"
                :value="currAprValue"
                @input="updateValue('currAprValue', $event)"
                :showToolTip="showToolTip"
              />
            </div>
            <div class="input-group">
              <NumberInput
                name="oweAmount"
                label="How Much Do You Owe on Home:"
                type="number"
                :value="oweAmount"
                @input="updateValue('oweAmount', $event)"
                :showToolTip="showToolTip"
              />
            </div>
            <div class="input-group">
              <Dropdown
                label="Current Credit Score:"
                :options="creditScoreOptions"
                :selectedOption="tenure"
                @change="updateTenure"
                :showToolTip="showToolTip"
              />
            </div>
            <a href="https://www.lendingtree.com/home/home-value">Estimate your home's current value</a>
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div class="right-column">
          <p>You can get a home equity loan or HELOC for:</p>
          <div class="amount">
            <h1>${{ homeEquityLoan }}</h1>
          </div>

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
  window.location.href = "https://www.lendingtree.com/?sessionid=d542b553-e19d-4699-bb89-ca3708f5b031&mta=1";
};

watch([currAprValue, oweAmount, tenure], calculateHomeEquityLoan);

onMounted(calculateHomeEquityLoan);
</script>

<style scoped>
@import "../../apps/assets/loan-payment-calc.css";
</style>
