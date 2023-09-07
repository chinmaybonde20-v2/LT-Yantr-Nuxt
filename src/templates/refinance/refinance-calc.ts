import { ref, computed } from "vue";

const loanAmount = ref(null);
const interestRate = ref(null);
const loanTerm = ref(1);

const calculatedAmount = computed(() => {
  // Implement your calculation logic here based on loanAmount, interestRate, and loanTerm
  return (loanAmount.value * (1 + interestRate.value / 100)) / loanTerm.value;
});

const formattedAmount = computed(() => {
  return `$${calculatedAmount.value.toFixed(2)}`;
});

const calculateAmount = () => {
  // Trigger the calculation whenever any input changes
};

export {
  loanAmount,
  interestRate,
  loanTerm,
  calculatedAmount,
  formattedAmount,
  calculateAmount,
};
