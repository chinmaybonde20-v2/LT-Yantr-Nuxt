<template>
  <div>
    <DefaultLayout>
      <template v-slot:leftColumn>
        <div class="inputs">
          <div class="in-grp">
            <div class="input-group">
              <NumberInput
                name="amount"
                label="Loan Amount"
                type="number"
                :value="amount"
                @input-change="updateValue"
                :showToolTip="showToolTip"
              />
             
            </div>
            <div class="input-group">
              <NumberInput
                name="interest"
                label="Loan Interest"
                type="number"
                :value="interest"
                @input-change="updateValue"
                :showToolTip="showToolTip"
              />
            </div>
            <div class="input-group">
              <Dropdown
                label="Loan Tenure"
                :options="dropdownOptions"
                :selectedOption="tenure"
                @tenure-change="updateTenure"
                :showToolTip="showToolTip"
              />
            </div>
          </div>
        </div>
      </template>

      <template v-slot:rightColumn>
        <div class="right-column">
          <div class="amount">
            <p>Your monthly payment will be:</p>
            <h1>${{ monthlyPayment }}</h1>
            <p>Ready for the next step?</p>
          </div>

          <button class="get-offer-button" onclick="window.location.href = 'https:&#47;&#47;www.lendingtree.com/forms/mortgage/pecan/refi_sldr_pg_msg?rcode=10000&abandon=false&icode=47770&SpId=ns-calc-loan-payment&esourceid=6131666&cchannel=seo&cepage=%2fyantr%2fapps%2finflation.html&sessionid=d542b553-e19d-4699-bb89-ca3708f5b031&mta=1'">Get Free Loan Offer</button>


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

watch([amount, interest, tenure], calculateMonthlyPayment);

onMounted(calculateMonthlyPayment);
</script>

<style scoped>
@import "../../apps/assets/loan-payment-calc.css";
</style>