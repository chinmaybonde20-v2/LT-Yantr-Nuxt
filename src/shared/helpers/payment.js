export function calculateAutoPayment(
  totalLoanAmount,
  interestRate,
  termInMonths
) {
  const principal = parseFloat(totalLoanAmount);
  const rate = parseFloat(interestRate) / 100 / 12;
  const term = parseInt(termInMonths);

  const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
  return monthlyPayment.toFixed(2);
}
export default {
  convertLoanTermInMonths(LoanTerm) {
    return LoanTerm * 12;
  },

  convertInterestRatePerMonths(InterestRate) {
    return InterestRate / 1200;
  },

  calculateMonthlyPayment(amount, interest, tenure) {
    const principal = amount;

    const monthlyInterest = this.convertInterestRatePerMonths(interest);

    const numberOfPayments = this.convertLoanTermInMonths(tenure);

    if (isNaN(principal) || isNaN(interest) || isNaN(numberOfPayments)) {
      return "Invalid input";
    } else {
      const numerator =
        principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPayments);

      const denominator = Math.pow(1 + monthlyInterest, numberOfPayments) - 1;

      const monthlyPayment = (numerator / denominator).toFixed(2);

      return `Monthly Payment: $${monthlyPayment}`;
    }
  },
};
// payment.js

export function calculateMonthlyPayment(vm) {
  const loanBalance = vm.loanBalance;
  // Retrieve other data properties from the Vue component

  // Perform your calculation
  const newMonthlyPayment =
    (loanBalance * (vm.consoLoanRate / 12)) /
    (1 - Math.pow(1 + vm.consoLoanRate / 12, -vm.tenure * 12));

  const monthlySaving = vm.monthlyPayments - newMonthlyPayment;

  vm.newMonthlyPayment = newMonthlyPayment.toFixed(2);
  vm.monthlySaving = monthlySaving.toFixed(2);
}
