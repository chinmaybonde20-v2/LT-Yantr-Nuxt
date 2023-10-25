import { ref } from "vue";
// Auto refinaace
export const refinaaceTenure = ref([
  { value: 7, label: "7 Year" },
  { value: 6, label: "6 Years" },
  { value: 5, label: "5 Years" },
  { value: 4, label: "4 Years" },
  { value: 3, label: "3 Years" },
  { value: 2, label: "2 Years" },
]);

// Debt consolidation
const debtConsolidationTenure = ref([
  { value: 1, label: '1 Year' },
  { value: 2, label: '2 Years' },
  { value: 3, label: '3 Years' },
  { value: 4, label: '4 Years' },
  { value: 5, label: '5 Years' },
  { value: 6, label: '6 Years' },
  { value: 7, label: '7 Years' },
  { value: 8, label: '8 Years' },
  { value: 9, label: '9 Years' },
  { value: 10, label: '10 Years' },
]);

// Loan Payment
const loanPaymentTenure = ref([
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

// Refinance
const refinanceTenure = ref([
  { value: 15, label: "15 Years" },
  { value: 30, label: "30 Years" },
]);

// Student Loan Refinance
const studLoanRefTenure = ref([
  { value: 5, label: "5 Years" },
  { value: 10, label: "10 Years" },
]);