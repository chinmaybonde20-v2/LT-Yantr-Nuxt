import { ref } from "vue";

export const calculatorsList = ref([
  {
    id: 1,
    name: "Loan Payment Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-hl-emi-calculator.webp",
    description: "Estimate loan EMI for personal, home, or car loans.",
    buttonText: "Loan Payment Calculator",
    to: "/loan-payment-page",
  },
  {
    id: 2,
    name: "Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-hra-calculator.webp",
    description: "Refinance your loans with ease.",
    buttonText: "Refinance Calculator",
    to: "/refinance-calculator-page",
  },
  {
    id: 3,
    name: "Student Loan Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Refinance your student loans quickly and easily.",
    buttonText: "Student Loan Refinance Calculator",
    to: "/student-loan-refinance-page",
  },
  {
    id: 4,
    name: "Auto Loan Lite Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Calculate auto loan payments with ease.",
    buttonText: "Auto Loan Lite Calculator",
    to: "/auto-loan-lite-page",
  },
  {
    id: 5,
    name: "Debt Consolidation Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png",
    description: "Simplify your finances with debt consolidation.",
    buttonText: "Debt Consolidation Calculator",
    to: "/debt-consodilation-page",
  },
  {
    id: 6,
    name: "Mortgage Payment Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-credit-card-emi-calc.png",
    description: "Estimate monthly mortgage payments accurately.",
    buttonText: "Mortgage Payment Calculator",
    to: "/mortgage-payment-page",
  },
  {
    id: 7,
    name: "Auto Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Refinance your auto loan with ease..",
    buttonText: "Auto Refinance Calculator",
    to: "/auto-refinance-page",
  },
  {
    id: 8, 
    name: "Inflation Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png", 
    description: "Calculate the impact of inflation on your currency.",
    buttonText: "Inflation Calculator",
    to: "/inflamation-calculator-page",
  },

  // Undone
  {
    id: 7,
    name: "Student Loan Payoff Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-hl-emi-calculator.webp",
    description: "Pay off your student loans effectively.",
    buttonText: "Student Loan Payoff Calculator",
    to: "/apps/student-loan-payoff.html",
  },
  {
    id: 8,
    name: "Debt Repayment Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Manage and repay your debts efficiently.",
    buttonText: "Debt Repayment Calculator",
    to: "/apps/debt-repayment.html",
  },
  {
    id: 9,
    name: "Home Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Refinance your home mortgage for better terms.",
    buttonText: "Home Refinance Calculator",
    to: "/apps/home-refinance.html",
  },
  {
    id: 10,
    name: "Rent vs Buy Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png",
    description: "Compare renting and buying costs with ease.",
    buttonText: "Rent vs Buy Calculator",
    to: "/apps/rent-vs-buy.html",
  },
  {
    id: 11,
    name: "Auto Affordability Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-credit-card-emi-calc.png",
    description: "Determine your auto loan affordability quickly.",
    buttonText: "Auto Affordability Calculator",
    to: "/apps/auto-affordability.html",
  },
  {
    id: 12,
    name: "Auto Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Refinance your auto loan with ease..",
    buttonText: "Auto Refinance Calculator",
    to: "/auto-refinance-page",
  }
  
]);
