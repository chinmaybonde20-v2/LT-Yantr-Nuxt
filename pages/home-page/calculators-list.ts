import { ref } from "vue";

export const usCalculatorsList = ref([
  {
    id: 1,
    name: "Loan Payment Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-hl-emi-calculator.webp",
    description: "Estimate loan EMI for personal, home, or car loans.",
    buttonText: "Loan Payment Calculator",
    to: "/calculators/loan-payment-calculator",
  },
  {
    id: 2,
    name: "Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-hra-calculator.webp",
    description: "Refinance your loans with ease.",
    buttonText: "Refinance Calculator",
    to: "/calculators/refinance-calculator",
  },
  {
    id: 3,
    name: "Student Loan Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Refinance your student loans quickly and easily.",
    buttonText: "Student Loan Refinance Calculator",
    to: "/calculators/student-loan-refinance-calculator",
  },
  {
    id: 4,
    name: "Auto Loan Lite Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Calculate auto loan payments with ease.",
    buttonText: "Auto Loan Lite Calculator",
    to: "/calculators/auto-loan-lite-calculator",
  },
  {
    id: 5,
    name: "Debt Consolidation Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png",
    description: "Simplify your finances with debt consolidation.",
    buttonText: "Debt Consolidation Calculator",
    to: "/calculators/debt-consodilation-calculator",},
    {
      id: 6,
      name: "Home Equity Loan Calculator",
      imageUrl:
        "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png",
      description: "Calculate equity loan terms for your home.",
      buttonText: "Home Equity Loan Calculator",
      to: "/calculators/home-equity-loan-calculator",
    },
    {
      id: 7,
      name: "Debt Repayment Calculator",
      imageUrl:
        "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
      description: "Manage and repay your debts efficiently.",
      buttonText: "Debt Repayment Calculator",
      to: "/calculators/debt-repayment-calculator",
    },
    {
      id: 8,
      name: "Auto Refinance Calculator",
      imageUrl:
        "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
      description: "Refinance your auto loan with ease..",
      buttonText: "Auto Refinance Calculator",
      to: "/calculators/auto-refinance-calculator",
    },
  
  {
    id: 9, 
    name: "Inflation Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png", 
    description: "Calculate the impact of inflation on your currency.",
    buttonText: "Inflation Calculator",
    to: "/calculators/inflamation-calculator-calculator",
  },
  
  // Undone
 
  {
    id: 10,
    name: "Student Loan Payoff Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-hl-emi-calculator.webp",
    description: "Pay off your student loans effectively.",
    buttonText: "Student Loan Payoff Calculator",
    to: "/",
  },
 
  {
    id: 11,
    name: "Home Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Refinance your home mortgage for better terms.",
    buttonText: "Home Refinance Calculator",
    to: "/",
  },
  {
    id: 12,
    name: "Rent vs Buy Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png",
    description: "Compare renting and buying costs with ease.",
    buttonText: "Rent vs Buy Calculator",
    to: "/",
  },
  {
    id: 13,
    name: "Auto Affordability Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-credit-card-emi-calc.png",
    description: "Determine your auto loan affordability quickly.",
    buttonText: "Auto Affordability Calculator",
    to: "/",
  },
  {
    id: 14,
    name: "Auto Refinance Calculator",
    imageUrl:
      "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Refinance your auto loan with ease..",
    buttonText: "Auto Refinance Calculator",
    to: "/",
  }
  
]);

// Indian Calculators Array
export const indianCalculatorsList = ref([
  {
    id: 1,
    name: "Credit Card EMI Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png",
    description: "Calculate your credit card EMI in a minute with our Credit Card EMI Calculator.",
    buttonText: "Credit Card EMI Calculator",
    to: "/credit-card-emi-calculator-page",
  },
  {
    id: 2,
    name: "FD Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Calculate your FD (Fixed Deposit) returns easily with our FD Calculator.",
    buttonText: "FD Calculator",
    to: "/fd-calculator-page",
  },
  {
    id: 3,
    name: "RD Interest Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Calculate your RD (Recurring Deposit) returns easily with our RD Calculator.",
    buttonText: "RD Interest Calculator",
    to: "/rd-interest-calculator-page",
  },
  {
    id: 4,
    name: "Sukanya Samriddhi Yojana Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-hra-calculator.webp",
    description: "Calculate returns on your investment toward Sukanya Samriddhi Yojana (SSY)",
    buttonText: "Sukanya Samriddhi Yojana Calculator",
    to: "/sukanya-samriddhi-yojana-calculator-page",
  },
  {
    id: 5,
    name: "EMI Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-hl-emi-calculator.webp",
    description: "Calculate your personal loan, home loan, or car loan EMI with BankBazaar EMI Calculator.",
    buttonText: "EMI Calculator",
    to: "/emi-calculator-page",
  },
  {
    id: 6,
    name: "Home Loan EMI Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Calculate your home loan EMI with our Home Loan Calculator.",
    buttonText: "Home Loan EMI Calculator",
    to: "/home-loan-emi-calculator-page",
  },
  {
    id: 7,
    name: "Personal Loan EMI Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Calculate your personal loan EMI with our Personal Loan Calculator.",
    buttonText: "Personal Loan EMI Calculator",
    to: "/personal-loan-emi-calculator-page",
  },
  {
    id: 8,
    name: "Car Loan EMI Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-home-loan-elibility-calc.png",
    description: "Calculate your car loan EMI with our Car Loan EMI Calculator.",
    buttonText: "Car Loan EMI Calculator",
    to: "/car-loan-emi-calculator-page",
  },
  {
    id: 9,
    name: "Credit Card Eligibility Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-hl-emi-calculator.webp",
    description: "Check your credit card eligibility with our Credit Card Eligibility Calculator.",
    buttonText: "Credit Card Eligibility Calculator",
    to: "/credit-card-eligibility-calculator-page",
  },
  {
    id: 10,
    name: "Home Loan Eligibility Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Check your home loan eligibility in a minute with our Home Loan Eligibility Calculator.",
    buttonText: "Home Loan Eligibility Calculator",
    to: "/home-loan-eligibility-calculator-page",
  },
  {
    id: 11,
    name: "Income Tax Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Calculate your income tax slab-based payout with the help of our Income Tax Calculator.",
    buttonText: "Income Tax Calculator",
    to: "/income-tax-calculator-page",
  },
  {
    id: 12,
    name: "HRA Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-hra-calculator.webp",
    description: "Calculate your HRA (House Rent Allowance) conveniently with our HRA Calculator.",
    buttonText: "HRA Calculator",
    to: "/hra-calculator-page",
  },
  {
    id: 13,
    name: "PPF Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-emi-calculator.webp",
    description: "Calculate your PPF (Public Provident Fund) returns conveniently with our PPF Calculator.",
    buttonText: "PPF Calculator",
    to: "/ppf-calculator-page",
  },
  {
    id: 14,
    name: "NPS Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-hl-emi-calculator.webp",
    description: "Calculate your NPS (National Pension Scheme) returns seamlessly with Bankbazaar NPS Calculator.",
    buttonText: "NPS Calculator",
    to: "/nps-calculator-page",
  },
  {
    id: 15,
    name: "Monthly Savings Calculator",
    imageUrl: "https://static.bankbazaar.com/images/calc/icon-pl-emi-calculator.webp",
    description: "Achieve your financial goal conveniently with our Monthly Savings Calculator.",
    buttonText: "Monthly Savings Calculator",
    to: "/monthly-savings-calculator-page",
  },
]);

